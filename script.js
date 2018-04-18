// JavaScript Document
function animateDown(group) {
	"use strict";
	$.when($( group ).animate({
		top: "+=200"
	}, 80000)).then(function(){});
}

function animateUp(group) {
	"use strict";
	$.when($( group ).animate({
		top: "-=200"

	  }, 80000)).then(function(){});
}

animateDown(".group1");
animateUp(".group2");
