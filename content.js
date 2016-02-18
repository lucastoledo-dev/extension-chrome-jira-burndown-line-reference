chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //var firstHref = $("a[href^='http']").eq(0).attr("href");

      //console.log(firstHref);
      //console.log("dddd");
      var $line_cache;
		var $current_line;

		$("#ghx-chart-view").click(function(e){ 
			$line_cache = $current_line;
			$current_line=[];
		});

		$("#ghx-chart-view").mousemove(function(e){
			var parentOffset = $(this).parent().offset(); 
			var relX = e.pageX - parentOffset.left;
			var relY = e.pageY - parentOffset.top;

			$("#line_reference").remove("");
			$("#valueHour").remove("");

			var px_fator1 = $($(".yAxis.y1Axis .tickLabel")[0]).attr("style").match("top:(.*)px;r")[1];
			var px_fator2 = $($(".yAxis.y1Axis .tickLabel")[1]).attr("style").match("top:(.*)px;r")[1];
			var h_fator1 = $($(".yAxis.y1Axis .tickLabel")[0]).text().replace(/[^0-9]/g, '');
			var h_fator2 = $($(".yAxis.y1Axis .tickLabel")[1]).text().replace(/[^0-9]/g, '');
			var fator_reverse = $(".yAxis.y1Axis .tickLabel").last().text().replace(/[^0-9]/g, '');

			var px_fator = (px_fator1-px_fator2);
			var h_fator = (h_fator2-h_fator1);
			var hora_result = ((relY)*h_fator)/(px_fator);
			var fator_alinhamento = 7;

			var result = (((hora_result-fator_reverse+fator_alinhamento)*-1)).toFixed(2);

			var lineReference = $('<span id="line_reference" style="border: 1px solid #00FF08;width: 98%;height: 0px;position: absolute;top: '+(relY+8.5)+'px;left: 27px;"></span>');
			var valueHour = $('<span id="valueHour" style="top: '+(relY+8.5)+'px;z-index:9999;background-color: whitesmoke;color:red;width: 60px;height: 20px;position: absolute;left: -70px;padding: 4px;border-radius: 5px;text-align: center;border: 1px solid silver;"><b>'+result+'h</b></span>');

			$current_line = {lineReference: lineReference,valueHour:valueHour};
		   
		    $("#ghx-chart-view").append(lineReference);
			$("#ghx-chart-view").append(valueHour);

		    $("#ghx-chart-view").append($line_cache['lineReference']);
			$("#ghx-chart-view").append($line_cache['valueHour']);
		});
    }
  }


);