/* Author: Tom Klun

*/

function hashShortcut() {
	var hashTag = $(location).attr('hash');
	if (hashTag == "#work") {
		
	}
	
	if (hashTag == "#about") {
		$(hashTag).show();
		$(".nav-work").removeClass("visible");
		$(".nav-about").addClass("visible");
	}
	
	if (hashTag == "#contact") {
		$(hashTag).show();
		$(".nav-work").removeClass("visible");
		$(".nav-contact").addClass("visible");
	}
}

function initHover() {
	$(".portfolio-thumbnail-image img").hover(
		function() {
			var thumbPath = $(this).attr("src");
			var parent = $(this).parents(".portfolio-images");
			var grandParentID = parent.parent().attr("id");
			$("#" + grandParentID + " .large-image img").attr("src",thumbPath);
		}
	);
}

function runHideEffect(target) {
	$(target).hide("slide", { direction: "up" }, 250);
}

function runShowEffect(target){
	$(target).show("slide", { direction: "up" }, 250);
}

function initCloseButton(selector,target) {
	$(selector).click(function(event) {
		event.preventDefault();
		runHideEffect(target);		
		var currentlyVisible = $("a.visible");
		$(currentlyVisible).removeClass("visible");
	});
}

function initHighlights() {
	$("#highlights div").toggle(function() {
		$(this).animate({ backgroundColor: "rgba(255,255,255,0)" }, 500);
	}, function() {
		$(this).animate({ backgroundColor: "rgba(39,124,176,.4)" }, 500);
	});
}

function initDynamicHighlights()
{
	function createGrid(){
		var body = $( "body" );
		var coordinates = {};
		coordinates.x = [];
		coordinates.y = [];
		var width = $(window).width();
		var height = $(document).height();
	// Draw the X axis.
		for (var x = -99 ; x <= width ; x += 185){
 			(coordinates.x).push(x);
	// Draw the Y axis.
		};
		for (var y = -95 ; y <= height ; y += 185){
			(coordinates.y).push(y);
		};
		$(".grid").click(function() {
			$(this).animate({ backgroundColor: "rgba(255,255,255,0)" }, 500);
			console.log("click");
			return false;
		}, function() {
			$(this).animate({ backgroundColor: "rgba(39,124,176,.4)" }, 500);
			return false;
		});
		$( document ).click(
			function( event ){
				xval = event.pageX;
				yval = event.pageY;
				
				var xfound = false;
				var yfound = false;
				
			for ( var i in (coordinates.x) )
			{
				if ( xfound == false) {
					if ( ((coordinates.x[i]) > xval)) {
						finalxval = coordinates.x[i-1];
						xfound = true;
					}
				}
			};
			for ( var i in (coordinates.y) )
			{
				if ( yfound == false) {
					if ( ((coordinates.y[i]) > yval)) {
						finalyval = coordinates.y[i-1];
						yfound = true;
					}
				}
			};			
			
			$( "<div class='grid'></div>" ).appendTo( body ).css({
				left: ((finalxval) + "px"),
				top: ((finalyval) + "px"),
			}).animate({ backgroundColor: "rgba(39,124,176,.4)" }, 500);
			}
		);
	};	
	
	createGrid();
	
}


function initNav() {
	$(".nav-about").click(function(event) {
		event.preventDefault();
		if ($(".nav-about").hasClass("visible")) {
			return false;
		}
		if ($(".nav-contact").hasClass("visible")) {
			$("#contact").hide("slide", { direction: "up" }, 350);
			$(".nav-contact").removeClass("visible");
		}
		$("#about").show("slide", { direction: "up" }, 250);		
		$(".nav-work").removeClass("visible");			
		$(this).addClass("visible");
	});

	$(".nav-contact").click(function(event) {
		event.preventDefault();
		if ($(".nav-contact").hasClass("visible")) {
			return false;
		}
		if ($(".nav-about").hasClass("visible")) {
			$("#about").hide("slide", { direction: "up" }, 250);
			$(".nav-about").removeClass("visible");
		}
		$("#contact").show("slide", { direction: "up" }, 350);
		$(".nav-work").removeClass("visible");					
		$(this).addClass("visible");
	});

	$(".nav-work").click(function(event) {
		event.preventDefault();
		if ($(".nav-about").hasClass("visible")) {
			$("#about").hide("slide", { direction: "up" }, 250);
			$(".nav-about").removeClass("visible");
		}
		
		if ($(".nav-contact").hasClass("visible")) {
			$("#contact").hide("slide", { direction: "up" }, 350);
			$(".nav-contact").removeClass("visible");
		}
		$(this).addClass("visible");
	});	
}

function initMail() {
	$('a#submit').click(function() {
		//Inputed Strings
		var name = $('#name').val(),
			email = $('#email').val(),
			comment = $('#message').val();

		//Error Count
		var error_count = 0;

		//Regex Strings
		var username_regex = /^[a-z0-9_\-]{3,16}$/,
			email_regex = /^([a-z0-9_\.\-]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/;

			//Test Username
			if(name === '') {
				$('#contact_form li.name p.error').show();
				error_count += 1;
			}

			//Test Email
			if(!email_regex.test(email) || email === "") {
				$('#contact_form li.email p.error').show();
				error_count += 1;
			}

			//Blank Comment?
			if(comment === '') {
				$('#contact_form li.message p').css('display','inline');
				
				error_count += 1;
			}

			//No Errors?
			if(error_count === 0) {
				$.ajax({
					type: "post",
					url: "/_res/php/send.php",
					data: "name=" + name + "&email=" + email + "&comment=" + comment,
					error: function() {
						
						//$('.error').hide();
						//$('#sendError').slideDown('slow');
						//alert("error");
					},
					success: function () {
						$("#contact p.instruction,#contact form, #contact #submit, #contact #cancel").hide();
						$("#contact p.success").show();
						//$('.error').hide();
						//$('.success').slideDown('slow');
						//$('form#contactForm').fadeOut('slow');
						//alert("success");
					}
				});
			}

			else {
                //$('.error').show();
            }

		return false;
	});
}


$(document).ready(function() {

	hashShortcut();
	initNav();
	initHighlights();
	initHover();
	
	initMail();
	$("#portfolio-items").jFlow({
		slides: "#portfolio-items",
		width: "739px",
		height: "553px"
	});

	initCloseButton("#about .close", "#about");
	initCloseButton("#contact .close", "#contact");
	initCloseButton("#contact .cancel-close", "#contact");
	
	getLastFMRecent();
});

var getLastFMRecent = function() {
	var recentTracks = {};
	$.getJSON('http://ws.audioscrobbler.com/2.0/?callback=?',{
	        method: "user.getrecenttracks",
	        user: "musicnvrstops",
	        api_key: "1ae9ab786cee1295b0754826036ee943",
	        format: "json"
	}, function(data) {
				recentTracks = data;
				parseTracks(recentTracks);
	   }
	);
}

var parseTracks = function(tracks) {
	$.each(tracks.recenttracks.track, function(index, val) {
			var currentTrack = tracks.recenttracks.track[index];
			console.log(currentTrack);
			if (typeof (currentTrack.@attr) !== "undefined") {
				var nowPlaying = currentTrack.@attr.nowplaying;
				console.log(nowPlaying, ": true");	
			};
			var artist = currentTrack.artist["#text"];
			var track = currentTrack.name;
			console.log(artist, " - ", track);
		});
}

var postScroll = function() {
	var maxScrollPos = 113;
	var currentPos = $(window).scrollTop();
	$(window).scroll(function() {
		if (currentPos == maxScrollPos) {
			console.log("fired")
		};
	});	
}