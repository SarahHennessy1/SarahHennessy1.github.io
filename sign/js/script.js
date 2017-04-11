$(document).ready(function() {

// $(document).mousemove(function(e){
//     $("#hand").css({left:e.pageX, top:e.pageY});
// });

var number = 0;
var sound = new Audio("sound.mp3");

$("#push").on("click", function(){
	// $("#wheel").toggleClass("active");
	// $("#wheel").animate({"-webkit-transform" : "rotate(360deg)"},500);
	number = number + Math.random() * 3600;

	$("#wheel").stop().animate(
  {rotation: number},
  {
    duration: 2000,
    step: function(now, fx) {
      $(this).css({"transform": "rotate("+now+"deg)"});
      // sound.play();
    }
  });
	setTimeout(stopSpin, 2000);
});

$("#push").on("click", function(){
	$(this).addClass("hide");
	$(".stop").addClass("pulse");
	});

$("#active").css("-webkit-animation", "running");	

$(".stop").on("click", function(){
	$("#push").removeClass("hide");
	$("#wheel").stop(true).animate;
	});

function stopSpin() {
	$(".stop").removeClass("pulse");
	$("#arrow").removeClass("active");
	$("#push").removeClass("hide");
	$("#wheel").removeClass("active");
	setTimeout(pickLetter, 1000);
	setTimeout(drawThat, 1000);
};

function drawThat() {
    $('#simple_sketch').sketch();
  };

function pickLetter() {
	$("#wheel").addClass("hide");
	$(".stop").addClass("hide");
	$(".end").html("A is for...");
	$(".draw").removeClass("hide");
	$(".link").removeClass("hide");
	// $(".tools").removeClass("hide");
};


});