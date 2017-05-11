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
		for ( var i = 0; i <= 4; i++) {
			$(".team0").append(names[i]);
			names = jQuery.grep(names, function(value) {
  			return value != names[i];
			});
		$(".team1").append(names[i]);
			names = jQuery.grep(names, function(value) {
  			return value != names[i];
			});
		$(".team2").append(names[i]);
			names = jQuery.grep(names, function(value) {
  			return value != names[i];
			});
		$(".team3").append(names[i]);
			names = jQuery.grep(names, function(value) {
  			return value != names[i];
			});
		$(".team4").append(names[i]);
		};
	};

	function scoreBoard() {
		// $("div").addClass("game");
		$(".target").removeClass("hide");
		$(".output").removeClass("hide");
	};

	function addPoints() {

		var points0 = 0;
		$("#team0").html(points0);
		$("#add0").on("click", function(){
		points0++;
		$("#team0").html(points0);
		});
		$("#min0").on("click", function(){
		points0--;
		$("#team0").html(points0);
		});

		var points1 = 0;
		$("#team1").html(points1);
		$("#add1").on("click", function(){
		points1++;
		$("#team1").html(points1);
		});
		$("#min1").on("click", function(){
		points1--;
		$("#team1").html(points1);
		});

		var points2 = 0;
		$("#team2").html(points2);
		$("#add2").on("click", function(){
		points2++;
		$("#team2").html(points2);
		});
		$("#min2").on("click", function(){
		points2--;
		$("#team2").html(points2);
		});

		var points3 = 0;
		$("#team3").html(points3);
		$("#add3").on("click", function(){
		points3++;
		$("#team3").html(points3);
		});
		$("#min3").on("click", function(){
		points3--;
		$("#team3").html(points3);
		});

		var points4 = 0;
		$("#team4").html(points4);
		$("#add4").on("click", function(){
		points4++;
		$("#team4").html(points4);
		});
		$("#min4").on("click", function(){
		points4--;
		$("#team4").html(points4);
		});
	};

	$("div").on("mouseenter", function(){
		$(this).addClass("pick");
	});

	$("div").on("mouseout", function(){
		$(this).removeClass("pick");
	});

	var names = [
		"John",
		"Chris ",
		"Johnny ",
		"Malancha ",
		"Peter ",
		"Greg ",
		"Tom ",
		"Kendra ",
		//"Sarah ",
		"Sammy ",
		"Shea ",
		"Margaret ",
		"LJ ",
		"Nicole ",
		"Jessica ",
		"Mart ",
		"Katie ",
		"Jim ",
		"Patti ",
		"Andrew ",
		"Shannon ", 
		"Mary ",
		"Joe ",
		"Josh ",
		"Kelso ",
		"Alyssa ",
	];

	names = shuffle(names);

	addPoints();
	setTimeout(pickNames, 1000);
	setTimeout(scoreBoard,4000);

});