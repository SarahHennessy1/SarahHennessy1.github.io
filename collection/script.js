$(document).ready(function() {

$("img").on("mouseenter", function(){
	$(this).addClass("pick");
	});

$("img").on("mouseout", function(){
	$(this).removeClass("pick");
	});

$(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .131, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28, .29, .30, .31, .32, .33, .34, .35, .36, .37, .38, .39, .40 ").on("click", function(){
	$(this).addClass("reveal");
	$(".blur").removeClass("hide");
	console.log("check");
	});

$(".blur").on("click", function(){
	$(".blur").addClass("hide");
	$(".reveal").addClass("hide");
	$(".question").addClass("hide");
});

$("img").on("click", function(){
	$(this).toggleClass("time");
	setTimeout(getQuest, 2050);
});

function getQuest() {
	// $(".reveal").addClass("question");
	$(".reveal").addClass("hide");
	$(".question").removeClass("hide")
	console.log("HAPPENING");
};


});