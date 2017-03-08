$(document).ready(function() {

	var popCount = 0;
	var num = 5;

	for (var i=0; i<num; i++) {
	$("#balloon-container").append("<div class='balloon'></div>");
	if (i % 2 === 0) {
	$(".balloon").last().addClass("big");
	 }
	};

	//for (i<num;) {
	//$("#balloon-container").addClass("win");
	// }
	//};

	$(".balloon").on("mouseenter", function() {
	$(this).addClass("pop");
	popCount = popCount + 1;
	$("#pop-target").html(popCount);

	if (popCount===num) {
	$("body").addClass("win");	
	$("body").html("GAME OVER");
	 } 
	});

});