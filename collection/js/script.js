$(document).ready(function() {

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}


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
	setTimeout(blurThings, 0);
	});

	$("img").on("click", function(){
	$(this).addClass("time");
	setTimeout(getQuest, 2050);
	});

	$(".question").on("click", function(){
	$("#answer-target").removeClass("hide")
	});

	newQuestions = shuffle(newQuestions);

	// $('img').okzoom({
	//   width: 200,
	//   height: 200,
	//   round: true,
	//   shadow: "0 0 5px #000",
	//   border: "1px solid black"
	// });







});