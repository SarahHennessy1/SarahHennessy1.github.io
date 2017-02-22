// goal is to change div background color over time, fade it elegantly
//var colors = {
    //morning: [ "#F0FFF0", "#F0FFFF" ],
    //evening: [ "black", "purple" ]
  //};

//$(document).ready(function(){

// set a timer
//setInterval(function() {

  //updateColor( colors.morning, colors.evening )  $('body') )
  // if evening
  //if ( hours => 16 ) {
  //   updateColor( colors.morning, $('#background-changer'))
  // updateColor( colors.evening, $('#background-changer'))
  //} if ( hours < 16 ) {
  //  updateColor( colors.evening, $('#background-changer'))
  //}
//}
// goals
// every second, change the bg color of the div
// know what color is currently in use
// know how many colors there are
//var currentColor = 0;

//function updateColor(colors, object) {

  // figure out what next color is
  //currentColor++;
  // check whether next color is outside scope
  //if (currentColor >= colors.length) {
    // if Yes, then restart at 0
    //currentColor = 0;
  //}

  // apply color to background
  //object.css('background', colors.morning , colors.afternoon);

//}


//});




// collect all the divs
var divs = document.getElementsByTagName('div');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// set up the position immediately
positionRandomly();

// add a class to the body 
// divs under that class will transition

setInterval(function(){

  var currentTime = new Date();
  var minutes = currentTime.getMinutes();
    if ( minutes == 00 && minutes == 15 && minutes == 30 && minutes == 45 ) {
      $('body').addClass('float-bubbles'); addMore( $('<div class="bubble">'), $('#container') );
      positionRandomly();
}    else {
      $('body').addClass('float-bubbles'); 
      $('#container') ;
      positionRandomly();
    }
}, 1000)




function addMore( object, container ) {

  container.append( object );

}



function positionRandomly() {
  // i stands for "index". 
  for ( var i=0; i < divs.length; i++ ) {

      // shortcut! the current div in the list
      var thisDiv = divs[i];

      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);

      // update top and left position
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";

  }
}



// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}


window.onload = function() {

var audio = new Audio('audio/midnight.mp3')

sound1 = new Audio('audio/midnight.mp3')

sound2 = new Audio('audio/beat.mp3')

sound3 = new Audio('audio/africa.mp3')

sound4 = new Audio('audio/wall.mp3')

sound5 = new Audio('audio/need.m4a')

sound6 = new Audio('audio/breathe.m4a')

sound7 = new Audio('audio/high.m4a')

sound8 = new Audio('audio/dancing.mp3')

sound9 = new Audio('audio/5.m4a')

sound10 = new Audio('audio/rocket.m4a')

sound11 = new Audio('audio/tramp.mp3')

sound12 = new Audio('audio/piano.m4a')

sound13 = new Audio('audio/jumpin.mp3')

sound14 = new Audio('audio/something.mp3')

sound15 = new Audio('audio/madonna.mp3')

sound16 = new Audio('audio/pat.mp3')

sound17 = new Audio('audio/project.mp3')

sound18 = new Audio('audio/garth.mp3')

sound19 = new Audio('audio/crack.mp3')

sound20 = new Audio('audio/tangled.mp3')

sound21 = new Audio('audio/fountains.mp3')

sound22 = new Audio('audio/aloud.mp3')

sound23 = new Audio('audio/clash.mp3')

sound24 = new Audio('audio/drake.mp3')

sound25 = new Audio('audio/again.mp3')

sound26 = new Audio('audio/aeslin.mp3')

sound27 = new Audio('audio/brick.mp3')

sound28 = new Audio('audio/cali.mp3')

sound29 = new Audio('audio/cocaine.mp3')

sound30 = new Audio('audio/incubus.mp3')

sound31 = new Audio('audio/land.mp3')

sound32 = new Audio('audio/london.mp3')

sound33 = new Audio('audio/sunrise.mp3')

sound34 = new Audio('audio/sugar.mp3')

sound35 = new Audio('audio/strokes.mp3')

sound36 = new Audio('audio/515.mp3')

sound37 = new Audio('audio/abba.mp3')

sound38 = new Audio('audio/coyotes.mp3')

sound39 = new Audio('audio/dead.mp3')

sound40 = new Audio('audio/ladies.mp3')

sound41 = new Audio('audio/now.mp3')

sound42 = new Audio('audio/move.mp3')

sound43 = new Audio('audio/noon.mp3')

sound44 = new Audio('audio/MTA.mp3')

sound45 = new Audio('audio/melody.mp3')

sound46 = new Audio('audio/oasis.mp3')

sound47 = new Audio('audio/mcfly.mp3')

sound48 = new Audio('audio/rag.mp3')

sound49 = new Audio('audio/gun.mp3')

sound50 = new Audio('audio/monkees.mp3')

sound51 = new Audio('audio/jacked.mp3')

sound52 = new Audio('audio/gang.mp3')

sound53 = new Audio('audio/doctor.mp3')

sound54 = new Audio('audio/lost.mp3')

sound55 = new Audio('audio/bloc.mp3')

sound56 = new Audio('audio/hills.mp3')

sound57 = new Audio('audio/brown.mp3')

sound58 = new Audio('audio/dean.mp3')

sound59 = new Audio('audio/hurt.mp3')

sound60 = new Audio('audio/gherkin.mp3')

sound61 = new Audio('audio/relient.mp3')

sound62 = new Audio('audio/lizzy.mp3')

sound63 = new Audio('audio/champagne.mp3')

sound64 = new Audio('audio/saturday.mp3')

sound65 = new Audio('audio/five.mp3')

sound66 = new Audio('audio/seven.mp3')

sound67 = new Audio('audio/vandals.mp3')

sound68 = new Audio('audio/815.mp3')

sound69 = new Audio('audio/jovi.mp3')

sound70 = new Audio('audio/bruce.mp3')

sound71 = new Audio('audio/crows.mp3')

sound72 = new Audio('audio/stunning.mp3')

sound73 = new Audio('audio/elliot.mp3')

sound74 = new Audio('audio/faron.mp3')

sound75 = new Audio('audio/atmosphere.mp3')

sound76 = new Audio('audio/quarter.mp3')

sound77 = new Audio('audio/wheat.mp3')

sound78 = new Audio('audio/mark.mp3')

sound79 = new Audio('audio/ramones.mp3')

sound80 = new Audio('audio/snoop.mp3')

sound81 = new Audio('audio/shake.mp3')

sound82 = new Audio('audio/summer.mp3')

sound83 = new Audio('audio/enola.mp3')

sound84 = new Audio('audio/knock.mp3')

sound85 = new Audio('audio/coffee.mp3')

sound86 = new Audio('audio/possum.mp3')

sound87 = new Audio('audio/tengo.mp3')

sound88 = new Audio('audio/can.mp3')

sound89 = new Audio('audio/frying.mp3')

sound90 = new Audio('audio/1975.mp3')

sound91 = new Audio('audio/jesse.mp3')

sound92 = new Audio('audio/spoon.mp3')

sound93 = new Audio('audio/keys.mp3')

sound94 = new Audio('audio/fountain.mp3')

sound95 = new Audio('audio/who.mp3')

sound96 = new Audio('audio/dawn.mp3')

sound97 = new Audio('audio/beatles.m4a')

sound98 = new Audio('audio/aint.m4a')


function updateTime(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  // if
  // else if
  // else { fallback }

    if (hours == 00 && minutes == 00 && audio.paused) {
     sound1.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 00 && minutes == 15 && audio.paused) {
     sound2.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 00 && minutes == 30 && audio.paused) {
     sound3.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 00 && minutes == 45 && audio.paused) {
     sound4.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours ==01 && minutes == 00 && audio.paused) {
     sound14.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 01 && minutes == 15 && audio.paused) {
     sound5.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 01 && minutes == 30 && audio.paused) {
     sound71.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 01 && minutes == 45 && audio.paused) {
     sound15.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 02 && minutes == 00 && audio.paused) {
     sound6.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 02 && minutes == 15 && audio.paused) {
     sound16.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 02 && minutes == 30 && audio.paused) {
     sound72.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 02 && minutes == 45 && audio.paused) {
     sound73.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 3 && minutes == 00 && audio.paused) {
     sound7.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 3 && minutes == 15 && audio.paused) {
     sound17.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 3 && minutes == 30 && audio.paused) {
     sound18.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 3 && minutes == 45 && audio.paused) {
     sound8.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 4 && minutes == 00 && audio.paused) {
     sound74.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 4 && minutes == 15 && audio.paused) {
     sound19.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 4 && minutes == 30 && audio.paused) {
     sound75.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 4 && minutes == 45 && audio.paused) {
     sound76.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 5 && minutes == 00 && audio.paused) {
     sound9.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 5 && minutes == 15 && audio.paused) {
     sound78.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 5 && minutes == 30 && audio.paused) {
     sound56.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 5 && minutes == 45 && audio.paused) {
     sound28.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 6 && minutes == 00 && audio.paused) {
     sound77.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 6 && minutes == 15 && audio.paused) {
     sound79.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 6 && minutes == 30 && audio.paused) {
     sound80.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 6 && minutes == 45 && audio.paused) {
     sound21.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 7 && minutes == 00 && audio.paused) {
     sound20.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 7 && minutes == 15 && audio.paused) {
     sound20.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 7 && minutes == 30 && audio.paused) {
     sound27.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 7 && minutes == 45 && audio.paused) {
     sound81.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 8 && minutes == 00 && audio.paused) {
     sound82.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 8 && minutes == 15 && audio.paused) {
     sound83.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 8 && minutes == 30 && audio.paused) {
     sound29.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 8 && minutes == 45 && audio.paused) {
     sound84.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 9 && minutes == 00 && audio.paused) {
     sound10.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 9 && minutes == 15 && audio.paused) {
     sound94.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 9 && minutes == 30 && audio.paused) {
     sound95.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 9 && minutes == 45 && audio.paused) {
     sound96.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 10 && minutes == 00 && audio.paused) {
     sound93.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 10 && minutes == 15 && audio.paused) {
     sound92.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 10 && minutes == 30 && audio.paused) {
     sound91.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 10 && minutes == 45 && audio.paused) {
     sound90.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 11 && minutes == 00 && audio.paused) {
     sound30.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 11 && minutes == 15 && audio.paused) {
     sound31.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 11 && minutes == 30 && audio.paused) {
     sound26.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 11 && minutes == 45 && audio.paused) {
     sound85.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 12 && minutes == 00 && audio.paused) {
     sound43.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 12 && minutes == 15 && audio.paused) {
     sound86.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 12 && minutes == 30 && audio.paused) {
     sound37.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 12 && minutes == 45 && audio.paused) {
     sound35.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 13 && minutes == 00 && audio.paused) {
     sound87.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 13 && minutes == 15 && audio.paused) {
     sound22.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 13 && minutes == 15 && audio.paused) {
     sound22.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 13 && minutes == 30 && audio.paused) {
     sound88.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 13 && minutes == 45 && audio.paused) {
     sound38.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 14 && minutes == 00 && audio.paused) {
     sound89.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 14 && minutes == 15 && audio.paused) {
     sound44.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 14 && minutes == 30 && audio.paused) {
     sound63.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 14 && minutes == 45 && audio.paused) {
     sound46.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 15 && minutes == 00 && audio.paused) {
     sound61.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 15 && minutes == 15 && audio.paused) {
     sound62.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 15 && minutes == 30 && audio.paused) {
     sound45.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 15 && minutes == 45 && audio.paused) {
     sound47.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 16 && minutes == 00 && audio.paused) {
     sound48.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 16 && minutes == 15 && audio.paused) {
     sound49.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 16 && minutes == 30 && audio.paused) {
     sound50.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 16 && minutes == 45 && audio.paused) {
     sound64.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 17 && minutes == 00 && audio.paused) {
     sound65.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 17 && minutes == 15 && audio.paused) {
     sound36.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 17 && minutes == 30 && audio.paused) {
     sound51.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 17 && minutes == 45 && audio.paused) {
     sound52.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 18 && minutes == 00 && audio.paused) {
     sound24.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 18 && minutes == 15 && audio.paused) {
     sound53.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 18 && minutes == 30 && audio.paused) {
     sound70.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 18 && minutes == 45 && audio.paused) {
     sound54.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 19 && minutes == 00 && audio.paused) {
     sound66.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 19 && minutes == 15 && audio.paused) {
     sound55.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 19 && minutes == 30 && audio.paused) {
     sound34.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 19 && minutes == 45 && audio.paused) {
     sound67.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 20 && minutes == 00 && audio.paused) {
     sound11.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 20 && minutes == 15 && audio.paused) {
     sound68.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 20 && minutes == 30 && audio.paused) {
     sound69.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 20 && minutes == 45 && audio.paused) {
     sound58.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 21 && minutes == 00 && audio.paused) {
     sound12.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 21 && minutes == 15 && audio.paused) {
     sound33.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 21 && minutes == 30 && audio.paused) {
     sound40.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 21 && minutes == 45 && audio.paused) {
     sound39.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 22 && minutes == 00 && audio.paused) {
     sound25.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 22 && minutes == 15 && audio.paused) {
     sound41.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  }  if (hours == 22 && minutes == 30 && audio.paused) {
     sound42.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 22 && minutes == 45 && audio.paused) {
     sound59.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 23 && minutes == 00 && audio.paused) {
     sound32.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 23 && minutes == 15 && audio.paused) {
     sound57.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 23 && minutes == 30 && audio.paused) {
     sound13.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 23 && minutes == 45 && audio.paused) {
     sound60.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 7 && minutes == 08 && audio.paused) {
     sound97.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } if (hours == 16 && minutes == 23 && audio.paused) {
     sound98.play();
     setTimeout(function() { audtio.pause(); }, 300000);
  } 
}

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

setInterval(updateTime, 1000);


// gets the current time using `Date()` and returns the current year, month, day, hour, minute and second
function getTime() {

	// get the current date & time
	var now = new Date();

	// build an object with key:value pairs
	now = {
		year : now.getYear(),
		month : now.getMonth(),
		date : now.getDate(),
		day : now.getDay(),
		hour : now.getHours(),
		minute : now.getMinutes(),
		second : now.getSeconds()
	}

	return now;

}// end getTime()

}//end of something







