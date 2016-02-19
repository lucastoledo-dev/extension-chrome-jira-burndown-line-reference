function Burndown(data) {
  // DOM objects
  this.$wrap = $('#ghx-chart-wrap');
  this.$view = $('#ghx-chart-view');
  this.$canvasBase    = this.$view.find('canvas.base');
  this.$canvasOverlay = this.$view.find('canvas.overlay');

  // JIRA objects
  this.data = data;

  this.gridLines = {};
  this.gridLines.up = null;
  this.gridLines.down = null;
  this.nextGridLine = 'up';
}

Burndown.prototype.init = function() {
  var co = this.$canvasOverlay;

  // handlers
  co.click(this.handleClick.bind(this));
  co.mousemove(this.handleMouseMove.bind(this));
};

Burndown.prototype.handleClick = function(e) {
  this.addGridLine();
};

Burndown.prototype.handleMouseMove = function(e) {
  var co = this.$canvasOverlay;
  var vw = this.$view;
  var pos = vw.offset();

  this.bounds = {
    x: pos.left + 25,
    y: pos.top,
    width: co.width() - 25,
    height: co.height() - 25
  };

  var x = e.pageX - this.bounds.x;
  var y = e.pageY - this.bounds.y;

  if (x < 0 || x > this.bounds.width ||
      y < 0 || y > this.bounds.height) {
    return;
  }

  this.mousePosition = {
    x: e.pageX - this.bounds.x,
    y: e.pageY - this.bounds.y
  };
};

Burndown.prototype.getTimeRange = function () {
  var yAxis    = this.data.yAxisData;
  var tickSize = yAxis.tickSize;

  var timeSpent = this.data.timelineData.maxValues.timeSpent;
  var timeRange = (1 + Math.ceil(timeSpent / tickSize)) * tickSize;

  return timeRange / (60 * 60);
};

Burndown.prototype.getCurrentTime = function () {
  var estimateTime = this.bounds.height - this.mousePosition.y;
  var percentage   = estimateTime / this.bounds.height;
  var range = this.getTimeRange();

  return percentage * range;
}

Burndown.prototype.addGridLine = function () {
  var currentPosition = this.mousePosition.y;
  var currentTime = this.getCurrentTime();

  this.__clearOverlay();
  this.gridLines[this.nextGridLine] = {
    time: currentTime,
    position: currentPosition
  };

  if (this.gridLines.up)   this.__drawLine(this.gridLines.up);
  if (this.gridLines.down) this.__drawLine(this.gridLines.down);

  this.nextGridLine = this.nextGridLine == 'up' ? 'down' : 'up';
};

Burndown.prototype.__clearOverlay = function() {
  var ctx = this.$canvasOverlay[0].getContext('2d');
  ctx.clearRect(0, 0, this.$canvasOverlay.width(), this.$canvasOverlay.height());
};

Burndown.prototype.__drawLine = function(gridLine) {
  var time = gridLine.time;
  time = Math.floor(time) + 'h';

  var ctx = this.$canvasOverlay[0].getContext('2d');

  ctx.beginPath();
  ctx.moveTo(25, gridLine.position);
  ctx.lineTo(this.bounds.width+25, gridLine.position);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();
  ctx.closePath();

  ctx.font = '12px Arial';
  ctx.fillStyle = 'red';
  ctx.fillText(time, 0, gridLine.position);
};

function GHInjector () {
  this.script = document.createElement('script');
  this.script.textContent = '(' + this.__detour + ')();';

  this.data = null;
}

GHInjector.prototype.init = function () {
  (document.head || document.documentElement).appendChild(this.script);
  this.script.parentNode.removeChild(this.script);

  var _this = this;
  window.addEventListener('GH_Objects', function(e) {
    _this.data = JSON.parse(e.detail);
  });
};

GHInjector.prototype.__detour = function() {
  var check;
  var event;

  var model = GH.BurndownChartModel;
  // Original function reference
  var original = model.setRawData;

  // Set trampoline
  var trampoline = function(a) {
    // Call original function
    original.call(this, a);

    // Get data from model
    check = JSON.stringify(this);

    event = new CustomEvent('GH_Objects', {detail: check});
    window.dispatchEvent(event);
  };

  trampoline.$original = original;
  model.setRawData = trampoline;
};

// Inject script into page
var injector = new GHInjector();
injector.init();

var burndown;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message !== 'clicked_browser_action') {
      return;
    }

    if (!burndown) {
      burndown = new Burndown(injector.data);
      burndown.init();
    }
  }
);