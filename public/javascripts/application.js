// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
	postScroll();
	changeOffset();
	setOffset();
	imageGallery.init();
	lastFM.toggle("#last-fm");
	contactForm.showForm("#contact");
	$('#contact_message_submit').click(function() {
  	});
});

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

var calculateBottomOffset = function() {
	var contentHeight = 739;
	var offset = 	window.innerHeight - contentHeight;
	return offset;
};

var setOffset = function() {
	var contentArea = $("#post");
	var bottomPadding = calculateBottomOffset();
	contentArea.css('padding-bottom', bottomPadding.toString() + 'px');
	console.log(bottomPadding);
}

var changeOffset = function() {
	var contentArea = $("#post");
	$(window).resize(function() {
		setOffset();
	});
};

var lastFM = {
	toggle : function(fmContent) {
		$(".last-fm a").click(function(event) {
			event.preventDefault();
			$(this).toggleClass("active");
			$(fmContent).fadeToggle();
		});
	}
};

var imageGallery = {
	init : function() {
		var numOfImages = $('#slider img').length;
		if (numOfImages > 1) {
			$('#slider').nivoSlider({
				effect: 'sliceDownLeft', // Specify sets like: 'fold,fade,sliceDown'
				slices: 25, // For slice animations
				pauseTime: 5000, // How long each slide will show
				controlNav: false, // 1,2,3... navigation
			});	
		}
	}	
};

var contactForm = {
	showForm : function(contactForm) {
		$("li a.nav-contact, #contact .close, #contact #cancel").click(function(event) {
			event.preventDefault();
			$(contactForm).slideToggle();
		});
	}
};