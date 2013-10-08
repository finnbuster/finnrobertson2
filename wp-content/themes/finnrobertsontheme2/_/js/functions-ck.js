// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
// remap jQuery to $
(function(e){e(document).ready(function(){var t=e(".mobile_menu_button");t.length>0&&e(".mobile_menu_button").click(function(){e("body").toggleClass("active")})})})(window.jQuery);