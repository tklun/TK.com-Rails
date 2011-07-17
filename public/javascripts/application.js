// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
postScroll()
})

var postScroll = function() {
	var maxScrollPos = 91;
	if ($("body").hasClass("posts-long") || $("body").hasClass("work"))
		$(window).scroll(function() {
			var currentPos = $(window).scrollTop();
			console.log(currentPos)
			if (currentPos >= maxScrollPos) {
				console.log("fired")
				$("html").addClass("scroll");
			} else if (currentPos <= maxScrollPos) {
				$("html").removeClass("scroll");
			};
		});	
}