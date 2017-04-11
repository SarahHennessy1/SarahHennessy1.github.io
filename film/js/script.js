$(document).ready(function() {

	var url = "https://www.youtube.com/watch?v=";

	var links = [
		"36QiuRc_3I8",
		"YB9Oq0hn5KY",
		"Y3P0Zpe-2og",
		"VNS7oIErou0",
		"kMqeoW3XRa0",
		"dwUv3BjUS40",
		"pOk0fsMGyck",
		"jbZJ487oJlY",
		"BtTlgxtoqhg",
		"EMZ6zp-3oGY",
		"2qfmAllbYC8",
		"0pdqf4P9MB8",
		"Ct51eHNsii4",
		"3rQuRLERl6A",
		"jUc4oHnFBnc",
	];

	var openSite = function() {
              var randIdx = Math.random() * links.length;
              randIdx = parseInt(randIdx, 10);
              var link = url + links[randIdx];

     return link;

// function chooseTrailer() {
// 	var randomNum = Math.floor(Math.random() * trailers.length);

// 	console.log(randomNum);

// 	document.getElementById("filmTrailer").src = url + trailers[randomNum];
// };

// console.log("Check Check");
// chooseTrailer();

});