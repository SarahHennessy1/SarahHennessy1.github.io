$(document).ready(function() {

	var container = document.getElementById('imageContainer');
	var docFrag = document.createDocumentFragment();

	// imgs = shuffle(imgs);

	imgs.forEach(function(url, index, originalArray) {
    	var img = document.createElement('img');
   	 	img.src = url;
   		docFrag.appendChild(img);
	});

	container.appendChild(docFrag);

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	// function startTimer(duration, display) {
 //    var timer = duration, seconds;
 //    setInterval(function () {
 //        seconds = parseInt(timer % 60, 10);

 //        seconds = seconds < 10 ? "0" + seconds : seconds;

 //        display.text(seconds);

 //       		 if (--timer < 0) {
 //       		 timer = seconds;
 //       		 display.text(seconds);
 //        	}
 //    	}, 1000);
	// }

	// function theTime() {
 //    	var questionTime = 60 * .5,
 //        display = $('#time');
 //    	startTimer(questionTime, display);
	// 	};

	function getQuest() {
		$(".reveal").addClass("hide");
		$(".question").removeClass("hide");
		$("#answer-target").addClass("hide");
		// theTime();
		// $("#time").removeClass("hide");
		setTimeout(timerStuff, 30000);
	};

	function timerStuff() {
		$("#answer-target").removeClass("hide");
	};

	function blurThings() {
		$(".question").addClass("hide");
		$(".reveal").addClass("hide");
		$(".blur").toggleClass("hide");
	};

	// function updateQuote() {

	// 	// var orderNumber = Math.floor(Math.random() * 64);

	// 	$("#question-target").html(newQuestions[orderNumber]["question"]);
	// 	$("#answer-target").html(newQuestions[orderNumber]["answer"]);
	// };

	$("img").on("mouseenter", function(){
	$(this).addClass("pick");
	});

	$("img").on("mouseout", function(){
	$(this).removeClass("pick");
	});

	$("img").on("click", function(){
	$(this).addClass("reveal");
 	$(".blur").removeClass("hide");
 	var orderNumber = $(this).index();
 	$("#question-target").html(newQuestions[orderNumber]["question"]);
	$("#answer-target").html(newQuestions[orderNumber]["answer"]);
 	});


	$(".blur").on("click", function(){
	setTimeout(blurThings, 0);
	});

	$("img").on("click", function(){
	$(this).addClass("time");
	setTimeout(getQuest, 200);
	});

	$(".question").on("click", function(){
	$("#answer-target").removeClass("hide");
	});

	// $('img').okzoom({
	//   width: 200,
	//   height: 200,
	//   round: true,
	//   shadow: "0 0 5px #000",
	//   border: "1px solid black"
	// });

});