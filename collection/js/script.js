$(document).ready(function() {

// var randomNumber = Math.floor(Math.random() * (newQuestions.length));


	$("img").on("mouseenter", function(){
	$(this).addClass("pick");
	});

	$("img").on("mouseout", function(){
	$(this).removeClass("pick");
	});

	$("img").on("click", function(){
	$(this).addClass("reveal");
 	$(".blur").removeClass("hide");
 	});

	$(".blur").on("click", function(){
	setTimeout(blurThings, 1000);
	});

	$("img").on("click", function(){
	$(this).addClass("time");
	setTimeout(getQuest, 2050);
	});

	$(".question").on("click", function(){
	$("#answer-target").removeClass("hide")
	});

	$('reveal').okzoom({
	  width: 200,
	  height: 200,
	  round: true,
	  shadow: "0 0 5px #000",
	  border: "1px solid black"
	});

function getQuest() {
	$(".reveal").addClass("hide");
	$(".question").removeClass("hide")
	$("#answer-target").addClass("hide")
	setTimeout(updateQuote, 250);
};

function blurThings() {
	$(".question").addClass("hide");
	$(".reveal").addClass("hide");
	$(".blur").toggleClass("hide");
};

function updateQuote() {	

	var randomNumber = Math.floor(Math.random() * (newQuestions.length));

	$("#question-target").html(newQuestions[randomNumber]["question"]);
	$("#answer-target").html(newQuestions[randomNumber]["answer"]);

	// newQuestionsCounter++;
	// if (newQuestionsCounter === newQuestions.length) {
	// newQuestionsCounter = 0;}
};





});