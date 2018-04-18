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

$('.menu-toggle').click(function() {
	"use strict";
  	$('ul').toggleClass('opening');
  	$(this).toggleClass('open');
});

$("#homeLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#logoSection").offset().top
    }, 1000);
});

$("#aboutLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#aboutSection").offset().top
    }, 1000);
});

$("#whatLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#whatSection").offset().top
    }, 1000);
});

$("#ticketsLink").click(function(e) { 
	"use strict";
	e.preventDefault();
    $('html, body').animate({
		scrollTop: $("#ticketsSection").offset().top
    }, 1000);
});