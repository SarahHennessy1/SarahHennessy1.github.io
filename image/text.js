var pic = [
	"image/bastards.jpg",
	"image/blow.png",
	"image/break.png",
	"image/budapest.jpg",
	"image/candles.jpg",
	"image/carrie.jpg",
	"image/cat.jpg",
	"image/club.png",
	"image/clueless.png",
	"image/earl.png",
	"image/elf.jpg",
	"image/famous.jpg",
	"image/gatsby.png",
	"image/grand.png",
	"image/grease.png",
	"image/gump.png",
	"image/heathers.png",
	"image/jumanji.jpg",
	"image/lala.gif",
	"image/matilda.png",
	"image/orange.png",
	"image/parent.png",
	"image/pulp.jpg",
	"image/sabrina.jpg",
	"image/school.png",
	"image/shutter.png",
	"image/society.jpg",
	"image/taxi.jpg",
	"image/tene.png",
	"image/trap.jpg",
	"image/vertigo.jpg",
	"image/amelie.png",
	"image/betty.jpg",
	"image/sunset.png",
	"image/2001.png",
	"image/space.png",
	"image/walter.jpg",
	"image/stranger.jpg",
	"image/friends.jpg",
	"image/house.jpg",
	"image/harry.jpg",
	"image/mad.jpg",
	"image/white.jpg",
	"image/silence.jpg",
	"image/stellar.jpg",
	"image/lash.jpg",
	"image/help.jpg",
	"image/Whip.jpg",
	"image/beauty.png",
	"image/funk.jpg",
	"image/lambs.jpg",
	"image/office.png",
	"image/shots.gif",
	"image/run.jpg",
	"image/god.jpg",
	"image/hot.jpg",
	"image/man.jpg",
	"image/graduate.jpg",
	"image/north.png",
	"image/x.jpg", 
	"image/freaks.png",
	"image/rock.png",
	"image/zones.png",
	"image/tvd.gif",
	"image/scream.png",
	"image/rachel.jpg",
	"image/hand.jpg",
	"image/name.jpg",
	"image/hug.jpg",
]

function choosePic() {
     var randomNum = Math.floor(Math.random() * pic.length);
     $("myPicture").src = pic[randomNum];
}






