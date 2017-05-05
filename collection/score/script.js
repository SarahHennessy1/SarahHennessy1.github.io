$(document).ready(function() {

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	function pickNames() {
		var randomNumber = Math.floor(Math.random() * (names.length)); 
		if (randomNumber > 21) {randomNumber = 0;}

		console.log(randomNumber);
		$(".nameDisplay").html(names[randomNumber++]);
		console.log(randomNumber);
		$(".nameDisplay1").html(names[randomNumber++]);
		console.log(randomNumber);
		$(".nameDisplay2").html(names[randomNumber++]);
		console.log(randomNumber);
		$(".nameDisplay3").html(names[randomNumber++]);
		console.log(randomNumber);
		$(".nameDisplay4").html(names[randomNumber++]);
		console.log(randomNumber);
		$(".nameDisplay5").html(names[randomNumber++]);

	};

	var team = 0;

	for ( var i = 0; i <= 26; i++) {
		$("div").append( names[i];);
		team++;
		if (team>=4) {
			team = 0
		};
	};

	$("div").on("mouseenter", function(){
		$(this).addClass("pick");
	});

	$("div").on("mouseout", function(){
		$(this).removeClass("pick");
	});

	var names = [
		"John",
		"Chris",
		"Johnny",
		"Malancha",
		"Peter",
		"Greg",
		"Tom",
		"Kendra",
		"Sarah",
		"Sammy",
		"Shea",
		"Margaret",
		"LJ",
		"Nicole",
		"Jessica",
		"Mart",
		"Katie",
		"Jim",
		"Patti",
		"Andrew",
		"Shannon", 
		"Mary",
		"Joe",
		"Josh",
		"Kelso",
		"Alyssa",
	];

	names = shuffle(names);

	setTimeout(pickNames, 200);

});