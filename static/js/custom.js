$(document).ready(function () {
	"use strict";
	
	//Intro Carousel
	$(".intro-carousel").owlCarousel({
		loop: false,
		items : 1,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: false,
		margin : 30,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1,
				nav : false
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
    });
	
	//Screenshot Gallery
	$(".screenshot-gallery").owlCarousel({
		loop: false,
		items : 3,
		nav : false,
		responsiveClass: true,
		dots: true,
		margin: 15,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2
			},
			992: {
				items: 3,
				nav: false,
				loop: false
			}
		}
    });
	
	//Testimonial
	$(".testimonial-slider").owlCarousel({
		loop: false,
		items : 1,
		nav : false,
		responsiveClass: true,
		dots: true,
		margin: 15,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
    });
	
	
	//Team Carousel
	$(".team-carousel").owlCarousel({
		loop: false,
		items : 4,
		nav : false,
		responsiveClass: true,
		dots: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
    });
	
	
	//Sticky JS
	$(".navbar-default").sticky({topSpacing: 0});
	
	//Scroll Spy
	$('body').scrollspy({ target: '#main-nav' });
	
	//Smooth Scrool
	smoothScroll.init();
	
	//Portfolio Lightbox
	$('.screenshot-single').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			// options for gallery
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	//jQuery Counter
	$('.counter-init').counterUp({
		delay: 10,
		time: 1500
	});
	
	//Scroll Spy
	$('body').scrollspy({ target: '#main-nav' });
	
	//Back to top
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	//Magnific Popup
	$('.video-btn').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				  '</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'http://www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src'
		}
	});
	
	// Simple Timer
	$('#timer-wrapper').syotimer({
		year: 2018,
		month: 4,
		day: 1,
		hour: 12,
		minute: 30
	});
	
	//Preloader
	$(window).load(function() { // makes sure the whole site is loaded
		$('#box,#hill').fadeOut(); // will first fade out the loading animation
		$('#loader,.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
	
	
	//WOW JS
	new WOW().init();
	
	
});