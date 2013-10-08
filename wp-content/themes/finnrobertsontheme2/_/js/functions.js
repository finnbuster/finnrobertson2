// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

	// Switch panels for the paneled nav on mobile
	var $mobile_menu_button = $('.mobile_menu_button');
	if ($mobile_menu_button.length > 0)  {
		$('.mobile_menu_button').click(function () {
			$('body').toggleClass('active');
		});
	}

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);