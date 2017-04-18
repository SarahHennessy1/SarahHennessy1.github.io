$(document).ready(function() {

var number = 0;
var sound = new Audio("sound.mp3");
var letters = [
	"A is for Apple and ...",
	"B is for Bunny and ...",
	"C is for Cake and ...",
	"D is for Dog and ...",
	"E is for Elf and ...",
	"F is for Fish and ...",
	"G is for Girl and ...",
	"H is for Hippie and ...",
	"I is for Ice Cream and ...",
	"J is for Jelly Fish and ...",
	"K is for Kite and ...",
	"L is for Lava and ...",
	"M is for Mom and ...",
	"N is for Nose and ...",
	"O is for Octopus and ...",
	"P is for Purple and ...",
	"Q is for Queen and ...",
	"R is for Radio and ...",
	"S is for Sun and ...",
	"T is for TV and ...",
	"U is for Ugly and ...",
	"V is for Vase and ...",
	"W is for Witch and ...",
	"X is for X-mas Tree and ...",
	"Y is for Yellow Hair and ...",
	"Z is for ZigZag and ..." ,
]

var pic = [
	"archive/A.png",	
	"archive/B.png",
	"archive/C.png",
	"archive/D.png",
	"archive/E.png",
	"archive/F.png",
	"archive/G.png",
	"archive/H.png",
	"archive/I.png",
	"archive/J.png",
	"archive/K.png",
	"archive/L.png",
	"archive/M.png",
	"archive/N.png",
	"archive/O.png",
	"archive/P.png",
	"archive/Q.png",
	"archive/R.png",
	"archive/S.png",
	"archive/T.png",
	"archive/U.png",
	"archive/V.png",	
	"archive/W.png",
	"archive/X.png",
	"archive/Y.png",
	"archive/Z.png"
]

$("#push").on("click", function(){

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
	document.getElementById("imageDisplay").src = pic[randomNumber];
};

function pickLetter() {
	$("#wheel").addClass("hide");
	$(".stop").addClass("hide");
	$(".draw").removeClass("hide");
	$(".link").removeClass("hide");
	$(".drawing").removeClass("hide");
	$(".down").removeClass("hide");
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