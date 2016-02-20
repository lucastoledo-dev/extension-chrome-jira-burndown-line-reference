import $ from 'jquery';
import {debounce} from 'lodash';
import {readonly} from '../../utils/property';

import {Line, ORIENTATION, ORIENTATION_SIZE_ATTR_NAMES} from '../line';
import {ValueHour} from '../value_hour';

const LINE_SIZE_CROP = {
  width: 30,
  height: 24
};

const LINE_POSITION_OFFSET = {
  x: 27, y: 0
};

export class Burndown {

  constructor (data) {
    readonly(this, 'view', $('#ghx-chart-view'));
    readonly(this, 'canvas', $('#ghx-chart-view > canvas.overlay'));

    this.__data = data;

    this.__lines = {
      horizontal: null,
      vertical: null,
      reference: null
    };

    this.__values = {
      current: null,
      reference: null
    };

    this.__mousePosition = {
      x: 0,
      y: 0
    };

    this._initElements();
    this._initHandlers();
  }

  setData (data) {
    this.__data = data;
  }

  getMaxTick () {
    let tickSize  = this.__data.yAxisData.tickSize;
    let estimate  = this.__data.timelineData.maxValues.estimate;
    let timeSpent = this.__data.timelineData.maxValues.timeSpent;
    let maxValue  = Math.max(estimate, timeSpent);
    let timeRange = Math.ceil(maxValue / tickSize) * tickSize;

    return timeRange / 3600;
  }

  _updateGrid () {
    this._updateLinePosition(this.__lines.horizontal);
    this._updateLinePosition(this.__lines.vertical);
    this._updateValueHour(this.__values.current);
  }

  _updateReference () {
    this._updateLinePosition(this.__lines.reference);
    this._updateValueHour(this.__values.reference);

    this.__lines.reference.element.show();
    this.__values.reference.element.show();
  }

  _createLine (id, orientation, hide = false) {
    let line = new Line(id, orientation);
    line.element.appendTo(this.view);
    this._updateLineSize(line);

    line.setOffset(LINE_POSITION_OFFSET.x, LINE_POSITION_OFFSET.y);

    if (hide) {
      line.element.hide();
    }

    return line;
  }

  _createValueHour (id, hide = false) {
    let valueHour = new ValueHour(id);
    valueHour.element.appendTo(this.view);
    this._updateValueHour(valueHour, 0);

    if (hide) {
      valueHour.element.hide();
    }

    return valueHour;
  }

  _initElements () {
    this.__lines.horizontal = this._createLine('horizontal', ORIENTATION.HORIZONTAL);
    this.__lines.vertical   = this._createLine('vertical', ORIENTATION.VERTICAL);
    this.__lines.reference  = this._createLine('reference', ORIENTATION.HORIZONTAL, true);

    this.__values.current   = this._createValueHour('current');
    this.__values.reference = this._createValueHour('reference', true);
  }

  _initHandlers () {
    this.view.click(this._handleMouseClick.bind(this));
    this.view.mousemove(this._handleMouseMove.bind(this));

    $(window).resize(debounce(this._handleWindowResize.bind(this), 500));
  }

  _handleMouseClick (event) {
    this._updateReference();
  }

  _handleMouseMove (event) {
    let offset = this.view.offset();
    let width  = this.canvas.width();
    let height = this.canvas.height() - LINE_SIZE_CROP.height;

    let x = event.pageX - offset.left;
    let y = event.pageY - offset.top;

    if (x >= LINE_POSITION_OFFSET.x && x < width) {
      this.__mousePosition.x = x - LINE_POSITION_OFFSET.x;
    }

    if (y >= LINE_POSITION_OFFSET.y && y < height) {
      this.__mousePosition.y = y;
    }

    this._updateGrid();
  }

  _handleWindowResize (event) {
    console.log('Updating sizes');
    this._updateLineSize(this.__lines.horizontal);
    this._updateLineSize(this.__lines.vertical);
    this._updateLineSize(this.__lines.reference);
  }

  _updateLinePosition (line) {
    line.value = line.orientation === ORIENTATION.VERTICAL ?
      this.__mousePosition.x : this.__mousePosition.y;
  }

  _updateLineSize (line) {
    let sizeAttrName = ORIENTATION_SIZE_ATTR_NAMES[line.orientation];
    let sizeCrop = LINE_SIZE_CROP[sizeAttrName];
    let canvasSize = this.canvas[ORIENTATION_SIZE_ATTR_NAMES[line.orientation]]();

    line.size = canvasSize - sizeCrop;
  }

  _updateValueHour (vh, value) {
    let height = this.canvas.height() - LINE_SIZE_CROP.height;

    if (value !== Number(value)) {
      let percentage = (height - this.__mousePosition.y) / height;
      let maxTick = this.getMaxTick();
      value = percentage * maxTick;
    }

    vh.value = value;
    vh.pixelsPerTime = height / this.getMaxTick();
  }
}