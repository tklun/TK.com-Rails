// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
	postScroll()
	lastFM.toggle("#last-fm");
})

var postScroll = function() {
	var maxScrollPos = 91;
	var scrollClass = "scroll";
	if ($("body").hasClass("posts-long") || $("body").hasClass("work")) {
		$(window).scroll(function() {
			var currentPos = $(window).scrollTop();
			if (currentPos >= maxScrollPos) {
				$("html").addClass(scrollClass);
			} else if (currentPos <= maxScrollPos) {
				$("html").removeClass(scrollClass);
			};
		});
	};
};

var lastFM = {
	toggle : function(fmContent) {
		$(".last-fm a, #last-fm").click(function(event) {
			event.preventDefault();
			$(fmContent).fadeToggle();
		});
	}
};