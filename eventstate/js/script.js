$(document).ready(function(){

	console.log("too tired for this!");

$(".button").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("focused");
	});

$(".button").on("mouseout", function(){

	$(this).removeClass("focused");
	});

$(".button").on("click", function(){
	$(this).toggleClass("active");
	$("body").toggleClass("dark");
	$("h1").html("Switch!");
	});

$("h1").on("click", function(){
	$(this).html("no");

});
});