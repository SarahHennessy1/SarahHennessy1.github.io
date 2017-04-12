$(document).ready(function() {

var number = 0;
var sound = new Audio("sound.mp3");
var letters = [
	"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

$("#push").on("click", function(){
	// $("#wheel").toggleClass("active");
	// $("#wheel").animate({"-webkit-transform" : "rotate(360deg)"},500);
	number = number + Math.random() * 3600 + 360;

	$("#wheel").stop().animate(
  {rotation: number},
  {
    duration: 3000,
    step: function(now, fx) {
      $(this).css({"transform": "rotate("+now+"deg)"});
      // sound.play();
    }
  });
	setTimeout(stopSpin, 2000);
});

$("#push").on("click", function(){
	$(this).addClass("hide");
	});

$("#active").css("-webkit-animation", "running");	

$(".stop").on("click", function(){
	$("#push").removeClass("hide");
	$("#wheel").stop(true).animate;
	});

function stopSpin() {
	$("#arrow").removeClass("active");
	$("#push").removeClass("hide");
	$("#wheel").removeClass("active");
	setTimeout(pickLetter, 1000);
	setTimeout(drawThat, 1000);
};

function drawThat() {
    $('#simple_sketch').sketch();
  };

function newLetter() {
	randomNumber = Math.floor(Math.random() * (letters.length));
	document.getElementById('letterDisplay').innerHTML = letters[randomNumber];
};

function pickLetter() {
	$("#wheel").addClass("hide");
	$(".stop").addClass("hide");
	$(".draw").removeClass("hide");
	$(".link").removeClass("hide");
	$("p").removeClass("hide");
	// $(".pencil").removeClass("hide");
	setTimeout(newLetter, 100);
	 sizeCanvas();
};

var sizeCanvas = function() {
	var $canvas = $("canvas");
	$canvas.attr("height", $(window).height());
	$canvas.attr("width", $(window).width());
};

$(window).on("load resize", sizeCanvas);
sizeCanvas();

});