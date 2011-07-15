// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
postScroll()
})

var postScroll = function() {
	var maxScrollPos = 91;
	$(window).scroll(function() {
		var currentPos = $(window).scrollTop();
		console.log(currentPos)
		if (currentPos >= maxScrollPos) {
			console.log("fired")
			$("html").removeClass("scrolled");
		} else if (currentPos <= maxScrollPos) {
			$("html").addClass("scrolled");
		};
	});	
}