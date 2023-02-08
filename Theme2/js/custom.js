/*============================================================
* Template Name    : Heavy Construction - One Page Html Template
* Author           : Vishal Lad
* Version          : 1.0
* Created          : 25/July/2020;
* File Description : Main JS file of the template
===========================================================*/

/*====================== TABLE 
	1.HOME	CAROUSEL
	2.STICKY ADD
    3.SCROLL DOWN SPEED
	4.LOGO BACKGROUND EFFECT
	5.MENU-BAR TOGGLE
	6.COUNTER
    7.SCROLL TOP SHOW
	8.SCROLL TOP CLICK EVENT
    9.TESTIMONIAL CAROUSEL
    10.ZOOM PROJECT IMAGE
    11.PROJECT CAROUSEL
 ========================*/

(function($)  {
	"use strict"; // Start of use strict
	
	//  HOME CAROUSEL
	$('.home-inner').owlCarousel({
		loop: true,
		margin: 0,
		autoplay: true,
		dots: true,
		nav: true,
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
	
	// STICKY ADD
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("navigation");
	var sticky = header.offsetTop;
	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
	
	// SCROLL DOWN SPEED
	$('a.page-scroll').on('click', function(e) {
		var targetHref = $(this).attr('href');
		var navbar = $('.navbar').outerHeight();
		$('html, body').animate({		
			scrollTop: $(targetHref).offset().top - navbar		
		}, 1250,  'easeInOutExpo');
		e.preventDefault();
	});
	
	// LOGO BACKGROUND EFFECT
    var navbar = $('.navbar').outerWidth();
	var container = $('.navbar .container').outerWidth();
	var navimg = $('.nav-img').outerWidth();
    $('.back-effect').css("width", (navbar - container)/2 + navimg + 100);
	$(window).resize(function() {
		var navbar = $('.navbar').outerWidth();
		var container = $('.navbar .container').outerWidth();
		var navimg = $('.nav-img').outerWidth();
		$('.back-effect').css("width", (navbar - container)/2 + navimg + 100);
	});
		
	// MENU-BAR TOGGLE
	$('.bar-toggler').on('click', function (e) {
		$('.menu-bar').toggleClass('active');
		$('.bar-toggler').toggleClass('change');
		e.preventDefault();
	});
	
    // COUNTER
    $('.about-box').appear(function() {
		$('.counter-number').countTo();
    });
	
    // SCROLL TOP SHOW
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//SCROLL TOP CLICK EVENT
	$('.scrollToTop').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//  TESTIMONIAL CAROUSEL
	$('.inner-testimonial').owlCarousel({
		loop: true,
		margin: 15,
		autoplay: true,
		dots: false,
		nav: true,
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
				items: 2
			}
		}
	});
	
	//ZOOM IMAGE
	$('.img-zoom').magnificPopup({
		type: 'image'
	});
	
	//  PROJECT CAROUSEL
	$('.inner-project').owlCarousel({
		loop: true,
		margin: 15,
		autoplay: true,
		dots: false,
		nav: true,
		autoplayTimeout: 15000,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
	
	// ADS CLOSE
	$('.ads button').on('click', function () {
		$('.google-ads').css('display','none');
	});
		
})(jQuery);