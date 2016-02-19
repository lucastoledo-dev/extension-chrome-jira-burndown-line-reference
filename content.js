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

			//========================================Calc h_fator AND x_fator ========================================================
			var ftxTemp = []
			var fthTemp = []
			var yAxisLength = $($(".yAxis.y1Axis .tickLabel")).length;
			$($(".yAxis.y1Axis .tickLabel")).each(function(i,item){
			 var xpoint_temp = $(item).attr("style").match("top:(.*)px;r")[1];
			 var hpoint_temp = $(item).text().replace(/[^0-9]/g, '');

			 if(i!=0 && i!=yAxisLength){
			 	var xpoint_temp_before = $($(".yAxis.y1Axis .tickLabel")[i-1]).attr("style").match("top:(.*)px;r")[1];
			 	var xresult = (xpoint_temp - xpoint_temp_before)*(-1);
			 	ftxTemp.push(xresult); 

			 	var hpoint_temp_before = $($(".yAxis.y1Axis .tickLabel")[i-1]).text().replace(/[^0-9]/g, '');
			 	var hresult = (hpoint_temp - hpoint_temp_before);
			 	fthTemp.push(hresult); 
			 }
			});
			var XTotalSumyAxis = 0;
			ftxTemp.forEach(function(item){ XTotalSumyAxis+=item });
            var px_fator = XTotalSumyAxis/ftxTemp.length;
			console.log("px_fator");
			console.log(px_fator);

			var HTotalSumyAxis = 0;
			fthTemp.forEach(function(item){ HTotalSumyAxis+=item });
			var h_fator = HTotalSumyAxis/fthTemp.length;
			console.log("h_fator");
			console.log(h_fator);
			//==============================================================================================================




			//var px_fator = (px_fator1-px_fator2);
			//var h_fator = (h_fator2-h_fator1);
			var hora_result = ((relY)*h_fator)/(px_fator);
			var fator_alinhamento = 7;

			var result = (((hora_result-fator_reverse)*-1)).toFixed(2);

			var lineReference = $('<span id="line_reference" style="border: 1px solid #00FF08;width: 98%;height: 0px;position: absolute;top: '+(relY)+'px;left: 27px;"></span>');
			var valueHour = $('<span id="valueHour" style="top: '+(relY)+'px;z-index:9999;background-color: whitesmoke;color:red;width: 60px;height: 20px;position: absolute;left: -70px;padding: 4px;border-radius: 5px;text-align: center;border: 1px solid silver;"><b>'+result+'h</b></span>');

			$current_line = {lineReference: lineReference,valueHour:valueHour};
		   
		    $("#ghx-chart-view").append(lineReference);
			$("#ghx-chart-view").append(valueHour);

		    $("#ghx-chart-view").append($line_cache['lineReference']);
			$("#ghx-chart-view").append($line_cache['valueHour']);
		});

    }
  }

  

);