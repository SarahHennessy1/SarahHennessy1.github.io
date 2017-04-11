$(document).ready(function() {

// $(document).mousemove(function(e){
//     $("#hand").css({left:e.pageX, top:e.pageY});
// });

// $("#push").on("mouseenter", function(){
// 	$("#arrow").addClass("active");
// 	});

var number = 0;

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
    }
  });
	setTimeout(stopSpin, 2000);
});

$("#push").on("click", function(){
	$(this).addClass("hide");
	});

$("#active").css("-webkit-animation", "running");	

$(".stop").on("click", function(){
	// $("#arrow").removeClass("active");
	$("#push").removeClass("hide");
	// $("#wheel").removeClass("active");
	$("#wheel").stop(true).animate;
	});

function stopSpin() {

	$("#arrow").removeClass("active");
	$("#push").removeClass("hide");
	$("#wheel").removeClass("active");

};

// setTimeout(stopSpin, 1000);

});
