$(document).ready(function() {



function changeMinHeight(){
	$(".flame").toggleClass("small");
};

function changeMedHeight() {
	$(".flame").toggleClass("medium");
};


function changeHeight() {

	var firstHeight = Math.floor(Math.random() * 1050 + 10);
	var secondHeight = Math.floor(Math.random() * 1050 + 20);
	var thirdHeight = Math.floor(Math.random() * 1050 + 30);
	var fourthHeight = Math.floor(Math.random() * 1050 + 40);
	var fifthHeight = Math.floor(Math.random() * 1050 + 40);
	var sixthHeight = Math.floor(Math.random() * 1050 + 30);
	var seventhHeight = Math.floor(Math.random() * 1050 + 20);
	var eigthHeight = Math.floor(Math.random() * 1050 + 10);

	$(".flame1").css({height:firstHeight});

	$(".flame2").css({height:secondHeight});

	$(".flame3").css({height:thirdHeight});

	$(".flame4").css({height:fourthHeight});

	$(".flame5").css({height:fifthHeight});

	$(".flame6").css({height:sixthHeight});

	$(".flame7").css({height:seventhHeight});

	$(".flame8").css({height:eigthHeight});
};

$(".flame").toggleClass("small");

var x1 = 2000;

function callLink(){
	x1 = x1 - 50;
	console.log(x1);
	if(x1 <100){
		x1 = 100;
	}

	setTimeout(function(){
		callLink();
		changeHeight();
	}, x1)
};

setTimeout(function(){
	callLink();
	changeHeight();
}, x1);

setInterval(changeMinHeight, 10000); 
setInterval(changeMedHeight, 20000);

});
























