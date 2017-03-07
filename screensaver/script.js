$(document).ready(function() {

var firstHeight = Math.floor(Math.random() * 500 + 10);
var secondHeight = Math.floor(Math.random() * 500 + 20);
var thirdHeight = Math.floor(Math.random() * 500 + 30);
var fourthHeight = Math.floor(Math.random() * 500 + 40);
var fifthHeight = Math.floor(Math.random() * 500 + 40);
var sixthHeight = Math.floor(Math.random() * 500 + 30);
var seventhHeight = Math.floor(Math.random() * 500 + 20);
var eigthHeight = Math.floor(Math.random() * 500 + 10);

console.log(firstHeight);
console.log(secondHeight);
console.log(thirdHeight);
console.log(fourthHeight);
console.log(fifthHeight);
console.log(sixthHeight);
console.log(seventhHeight);
console.log(eigthHeight);

$(document).ready(function () {
$(".flame").css({height:firstHeight});
});

$(document).ready(function () {
$(".flame2").css({height:secondHeight});
});

$(document).ready(function () {
$(".flame3").css({height:thirdHeight});
});

$(document).ready(function () {
$(".flame4").css({height:fourthHeight});
});

$(document).ready(function () {
$(".flame5").css({height:fifthHeight});
});

$(document).ready(function () {
$(".flame6").css({height:sixthHeight});
});

$(document).ready(function () {
$(".flame7").css({height:seventhHeight});
});

$(document).ready(function () {
$(".flame8").css({height:eigthHeight});
});



});


// function setHeight() {
//	$(".flame").css({"height"height+"%"
//});

//$("flame").css("height");
//$(".flame").onload(function() {
//var newHeight = $(".flame").val();
//$(".flame").height(newHeight);
//});