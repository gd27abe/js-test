/*js file*/
$(function(){

	var xLine = 5;
	var yLine = 5;
	var scale = 100;

	for(var i=0; i<yLine; i++){
		for(var n=0; n<xLine; n++){
			$("body").append("<div class ='tile"+i+n+"'></div>");
			var $tile = $(".tile"+i+n)
			$tile.css({
				"width" : scale,
				"height" : scale,
				"top" : scale * i,
				"left" : scale * n,
				"background-color" : "#ccc",
				"border" : "solid 1px #000",
				"position" : "absolute",
			});
		}
	}



})//end function
