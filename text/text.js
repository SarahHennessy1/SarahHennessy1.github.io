var quotes = [
	'We the people tell the government what to do, it doesn\’t tell us.',
	'I would rather belong to a poor nation that was free than to a rich nation that had ceased to be in love with liberty.',
	'A president\'s hardest task is not to do what is right, but to know what is right.',
	'One man with courage makes a majority.',
	'It\’s easier to do a job right, than to explain why you didn\’t.', 

]

function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}