$(document).ready(function() {


	var shamrockCount = 0;
	var num = 100;

	console.log("HELLO");

	for (var i=0; i<num; i++) {
	$(".white").addClass("shamrock");};
	for (var i=0; i<num; i++) {
	$(".green").addClass("shamrock");
	};

	$(".shamrock").on("mouseenter", function() {
	$(this).addClass("gone");
	shamrockCount = shamrockCount + 1;

	if (shamrockCount===num) {
	$("body").addClass("finished");
	$("body").removeClass("#main");	
	$("body").html("You did it!");
	 } 

	});




});