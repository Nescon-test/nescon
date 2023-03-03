/*============================================================
* Template Name    : HomeConstruction - One Page Html Template
* Author           : Vishal Lad
* Version          : 1.0.0
* Created          : 22/Mar/2020;
* File Description : Main JS file of the template
===========================================================*/

/*====================== TABLE 
    1.PRELOADER
    2.SCROLL-DOWN
	3.COUNTER
    4.SCROLL-TOP-SHOW
	5.SCROLL-TOP-CLICK-EVENT
    6.ADD ACTIVE CLASS
    7.ZOOM IMAGE
    8.TESTIMONIAL
    9.TYPED	
 ========================*/

(function($)  {
	"use strict"; // Start of use strict
	
	// Preloader
    $(window).on('load', function() {
        $('#preloader-content').delay(3000).fadeOut('slow');
    });
	
	// A Scroll Down Href	
	$('a.page-scroll , .icon_animate a').click(function(e) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 50
		}, 1250, 'easeInOutExpo');
		e.preventDefault();
	});
	
    // Counter
    $('.counter-data').appear(function() {
		$('.counter-number').countTo();
    });
	
    // Scroll Top Show
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
    // Active Class
	$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() + 80;
		$('.section-scroll').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
				$('.navbar-nav a.active').removeClass('active');
				$('.navbar-nav a').eq(i).addClass('active');
			}
		});
	}).scroll();

    //Zoom Image
	$('.img-zoom').magnificPopup({
		type: 'image'
	});

	//  TESTIMONIALS CAROUSEL HOOK
	$('.inner-testimonial').owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 15000,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	
	// TYPES TEXT JS	
	var typed = new Typed('.typed', {
	  strings: ["HOME", "VILLA"],
	  typeSpeed: 80,
	  startDelay: 1000,
	  backSpeed: 80,
	  backDelay: 3000,
	  loop: true,
	  cursorChar: "|",
	  showCursor: true
	});
	
	// ADS CLOSE
	$('.ads button').on('click', function () {
		$('.google-ads').css('display','none');
	});
		
})(jQuery);