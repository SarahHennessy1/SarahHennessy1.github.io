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
]

function choosePic() {
     var randomNum = Math.floor(Math.random() * pic.length);
     document.getElementById("myPicture").src = pic[randomNum];
}






