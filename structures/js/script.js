$(document).ready(function() {

var wordCounter = 0;
var quoteCounter = 0;

setInterval(function(){

updateWord();
updateQuote();

}, 1000 );

//$("#quote-target").html(singleQuote["quote"]);
//$("#source-target").html(singleQuote["source"]);
//$("#year-target").html(singleQuote["year"]);

function updateWord() {

$("#word-target").html(words[wordCounter]);

	wordCounter++;
	if (wordCounter === words.length) {
	wordCounter = 0;}


};

function updateQuote() {	

$("#quote-target").html(quotes[quoteCounter]["quote"]);
$("#source-target").html(quotes[quoteCounter]["source"]);
$("#year-target").html(quotes[quoteCounter]["year"]);

	quoteCounter++;
	if (quoteCounter === quotes.length) {
	quoteCounter = 0;}

}



});