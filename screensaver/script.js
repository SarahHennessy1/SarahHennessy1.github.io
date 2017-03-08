$(document).ready(function() {

function changeHeight() {
	var firstHeight = Math.floor(Math.random() * 550 + 10);
	var secondHeight = Math.floor(Math.random() * 550 + 20);
	var thirdHeight = Math.floor(Math.random() * 550 + 30);
	var fourthHeight = Math.floor(Math.random() * 550 + 40);
	var fifthHeight = Math.floor(Math.random() * 550 + 40);
	var sixthHeight = Math.floor(Math.random() * 550 + 30);
	var seventhHeight = Math.floor(Math.random() * 550 + 20);
	var eigthHeight = Math.floor(Math.random() * 550 + 10);

console.log(firstHeight);
console.log(secondHeight);
console.log(thirdHeight);
console.log(fourthHeight);
console.log(fifthHeight);
console.log(sixthHeight);
console.log(seventhHeight);
console.log(eigthHeight);

	$(".flame1").css({height:firstHeight});

	$(".flame2").css({height:secondHeight});

	$(".flame3").css({height:thirdHeight});

	$(".flame4").css({height:fourthHeight});

	$(".flame5").css({height:fifthHeight});

	$(".flame6").css({height:sixthHeight});

	$(".flame7").css({height:seventhHeight});

	$(".flame8").css({height:eigthHeight});
};

window.setInterval(changeHeight, 100); 










});








