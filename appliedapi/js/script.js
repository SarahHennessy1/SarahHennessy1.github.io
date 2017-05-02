$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 87);

var people = "people/" + randomNumber;
var planets = "planets/1";
var url = "https://swapi.co/api/" + people ;



$.getJSON(url, function(data) { 

	var name = data["name"];
	var personHeight = data["height"];
	var mass = data["mass"];
	var hair_color = data["hair_color"];
	var skin_color = data["skin_color"];
	var eye_color = data["eye_color"];
	var birth_year = data["birth_year"];
	var gender = data["gender"];
	var homeworld = data["homeworld"];

		console.log(name, personHeight, hair_color, skin_color, eye_color, gender);

	// $("#face").css({height:personHeight});
	$(".eyes").css("background-color",eye_color);
	$("#face").css("background-color",skin_color);

	$(".nameDisplay").html(name);

	if ( gender == "male") {
		$("#face").addClass("male");
	};
	
	if ( gender == "female") {
		$("#face").addClass("female");
	};

	if ( eye_color == "hazel") {
		$("#face").addClass("hazel");
	};

	if ( name == "bb8") {
		$("#face").addClass("bb");
	};

});












});