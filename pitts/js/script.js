$(document).ready(function() {

$("h1").on("mouseenter", function(){
	$(this).addClass("hover");
	});


$("h1").on("mouseout", function(){
	$(this).removeClass("hover");
	});

$(".link1, .link2, .link3").on("mouseenter", function(){
	$(this).addClass("hover");
	});

$(".link1, .link2, .link3").on("mouseout", function(){
	$(this).removeClass("hover");
	});

$(".reveal1").on("click", function(){
	$(".link1").toggleClass("hide");
	});

$(".reveal2").on("click", function(){
	$(".link2").toggleClass("hide");
	});




});