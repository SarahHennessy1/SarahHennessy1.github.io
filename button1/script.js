$(document).ready(function(){

console.log("testing testing");


$(".a, .s, .o").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("wfocused");
	});

$(".a, .s, .o").on("mouseout", function(){

	$(this).removeClass("wfocused");
	});

$(".a, .s, .o").on("click", function(){
//here are the hover instructions
	$(this).toggleClass("wactive");
	});

$(".b, .e, .i, .k, .u, .w").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("bfocused");
	});

$(".b, .e, .i, .k, .u, .w").on("mouseout", function(){

	$(this).removeClass("bfocused");
	});

$(".b, .e, .i, .k, .u, .w").on("click", function(){
//here are the hover instructions
	$(this).toggleClass("bactive");
	});

$(".c, .g, .j, .n, .q, .v, .y").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("rfocused");
	});

$(".c, .g, .j, .n, .q, .v, .y").on("mouseout", function(){

	$(this).removeClass("rfocused");
	});

$(".c, .g, .j, .n, .q, .v, .y").on("click", function(){
//here are the hover instructions
	$(this).toggleClass("ractive");
	});

$(".d, .h, .l, .p, .r").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("gfocused");
	});

$(".d, .h, .l, .p, .r").on("mouseout", function(){

	$(this).removeClass("gfocused");
	});

$(".d, .h, .l, .p, .r").on("click", function(){
//here are the hover instructions
	$(this).toggleClass("gactive");
	});

$(".f, .m, .t, .x").on("mouseenter", function(){
//here are the hover instructions
	$(this).addClass("yfocused");
	});

$(".f, .m, .t, .x").on("mouseout", function(){

	$(this).removeClass("yfocused");
	});

$(".f, .m, .t, .x").on("click", function(){
//here are the hover instructions
	$(this).toggleClass("yactive");
	});


});