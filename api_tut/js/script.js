$(document).ready(function() {
  var key = "b447aefe922b4563bc0231935171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=90210";

  $.getJSON(url, function(data) { 

  	 var temperature = data["current"]["temp_f"] + "px";
  	 var feeling = data["current"]["feelslike_f"] + "px";
  	 var amount = Math.floor(data["current"]["temp_f"]);
  	 var famount = data["current"]["feelslike_f"];
  	 // var temperature = 100;
  	 // var feeling = 99;
  	 // var amount = 100;
  	 // var famount = 99;

  	  	console.log(data);
  		console.log(temperature);
  	 	console.log(amount);
  	 	console.log(famount);


  	for (var i=0; i<amount; i++) {
	$("#weather").append("<div class='temp'></div>");
	};
	for (var i=0; i<famount; i++) {
	$("#weather").append("<div class='feels'></div>");
	};

	if (amount<= 30 ) {
	$(".temp").addClass("blue");
	};

	if (amount>= 60) {
	$(".temp").addClass("red");
	}

	if (amount> 30 && amount<60) {
	$(".temp").addClass("yellow");	
	}

	if (amount<= 30 ) {
	$(".feels").addClass("blue");
	};

	if (amount>= 60) {
	$(".feels").addClass("red");
	}

	if (amount> 30 && amount<60) {
	$(".feels").addClass("yellow");	
	}



  	$(".temp").css({height:temperature});
  	$(".temp").css({width:temperature});
  	$(".feels").css({height:feeling});
  	$(".feels").css({width:feeling});

  } );





});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/