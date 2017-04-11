$(document).ready(function() {

$("h1").on("mouseenter", function(){
	$(this).addClass("hover");
	});


$("h1").on("mouseout", function(){
	$(this).removeClass("hover");
	});

$(".link1").on("mouseenter", function(){
	$(this).addClass("hover");
	});

$(".link1").on("mouseout", function(){
	$(this).removeClass("hover");
	});

$(".link2").on("mouseenter", function(){
	$(this).addClass("hover");
	});

$(".link2").on("mouseout", function(){
	$(this).removeClass("hover");
	});



});