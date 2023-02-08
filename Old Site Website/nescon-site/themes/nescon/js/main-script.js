"use strict";
var $ = jQuery;
function updateWrapper() {
    var windowHeight = $(window).height(),
		headerHeight = $("#pageHeader").outerHeight(),
        footerHeight = $(".footer-wrapper").outerHeight();
    $("#wrapper").css({ marginBottom:-footerHeight });
    $('.main-content-wrapper').css({ paddingTop: headerHeight, paddingBottom: footerHeight });
}

function updateContainer() {
	$('.inner-menu').next().remove('a.mean-expand');
}

$(document).ready(function () {
	updateWrapper();
	updateContainer();
	$(window).resize(function() {
		updateWrapper();
		updateContainer();
	});
	$('.nav-container .nav').meanmenu({
		meanScreenWidth:"1365.98"	
	});
    $('#quicksearch').on('shown.bs.modal', function() {
        $('input[name=quickSearch]').trigger('focus');
    });
});

window.addEventListener("load", function(){
	$('body, #wrapper, .footer-wrapper').css({opacity:1});
});

jQuery("img").removeAttr("width").removeAttr("height");

//Match title height
function MatchHeight() {
    $('.csm-project-short-description').matchHeight();
    //$('.csm-project-category').matchHeight();
    //$('.csm-project-name').matchHeight();
    //$('.csm-project-short-description').matchHeight();
    //$('.csm-project-price-box').matchHeight();
}

$(document).ready(function() {
    $(".headerTop").sticky({topSpacing:0});
    $('.meanmenu-reveal').on('click', function() {
        $(".headerTop").toggleClass('active');
    });
    
    var sliderInit = $('.homeBannerSlider');    
    sliderInit.slick({
        //fade: true,
        dots: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        responsive: [
			{
				breakpoint: 991.98,
				settings: {
                    dots: true,
                    arrows: false,
				}
			}
		]
	});
    sliderInit.slickAnimation();
    
    $('.projects-slider').slick({
		dots: false,
		speed: 1000,
        arrows: true,
        setPosition: 1,
		infinite: true,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 2
				}
			},
            {
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2
				}
			},
            {
				breakpoint: 649.98,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
    
    $('.csm-projects-slider').slick({
		dots: false,
		speed: 1000,
		infinite: true,
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		responsive: [
            {
				breakpoint: 1199.98,
				settings: {
                    slidesToShow: 3
				}
			},
            {
				breakpoint: 991.98,
				settings: {
                    slidesToShow: 2
				}
			},
			{
				breakpoint: 575.98,
				settings: {
                    slidesToShow: 1
				}
			}
		]
	});
    
    $('.csm-projectImgSlider').slick({
		dots: false,
		speed: 500,
		arrows: false,
		autoplay: false,
		infinite: false,
		slidesToShow: 1,
		draggable: false,
		slidesToScroll: 1,
		autoplaySpeed: 1000,
		focusOnSelect: true,
		accessibility: false,
	});
			
	$('.csm-projectThumbSlider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 3,
		draggable: false,
		slidesToScroll: 1,
		autoplaySpeed: 1000,
		focusOnSelect: true,
		accessibility: false,
		asNavFor: '.csm-projectImgSlider',
		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 479.98,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
    
    $('.btn-control').each(function(){
        var currentid = $(this).attr('href');
        $(this).click(function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $(currentid).slideToggle();
		});
	});
    
    //Accordion Nav
	jQuery('.sideNav').navAccordion({
		expandButtonText: '<i class="fa fa-angle-right"></i>',  //Text inside of buttons can be HTML
		collapseButtonText: '<i class="fa fa-angle-up"></i>'
	});
    
    //Accordion Nav
	//jQuery('.yith-woocommerce-ajax-product-filter').navAccordion({
		//expandButtonText: '<i class="fa fa-angle-down"></i>',  //Text inside of buttons can be HTML
		//collapseButtonText: '<i class="fa fa-angle-up"></i>'
	//});
    
    $(".form-group select, .NiceSelect select").niceSelect();
    $("select").on("change", function () {
        $(this).parent().addClass("nice-selected");
    });
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	MatchHeight();
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
		setTimeout(function(){
            MatchHeight();
            $('.slick-slider').slick('setPosition');
		},10);
        $('.slick-slider').slick('setPosition');
	});
    
    $('.card').on('shown.bs.collapse', function () {
		setTimeout(function(){
            MatchHeight();
            $('.slick-slider').slick('setPosition');
		},10);
        $('.slick-slider').slick('setPosition');
	});
    
     $('.accordion').on('shown.bs.collapse', function () {
		setTimeout(function(){
            MatchHeight();
            $('.slick-slider').slick('setPosition');
		},10);
        $('.slick-slider').slick('setPosition');
	});
    
    jQuery('a[href^="#"].aboutmenu').click(function(e) {
		var headerHeight = $("#pageHeader").outerHeight(),
            stickyMenuHeight = $(".stickyMenu").outerHeight();
		$('.stickyMenu li.selected').removeClass('selected');
		$(this).parent('.stickyMenu li').addClass('selected');
        jQuery('html,body').animate({scrollTop: jQuery(this.hash).offset().top-(headerHeight+stickyMenuHeight)}, 1000);
        return false;
        e.preventDefault();
    });
	
	jQuery('a[href^="#"].scrollToSectionMenu').click(function(e) {
        //var headerHeight = $("#pageHeader").outerHeight();
        //var stickyMenuHeight = $(".stickyMenu").outerHeight();
        jQuery('html,body').animate({scrollTop: jQuery(this.hash).offset().top+1}, 1000);
        return false;
        e.preventDefault();
    });
    
    $(".reviews-listing").loadMore({
        selector: '.reviews-listing > li',
        loadBtn: '#loadMoreBtn',
        limit: 2,
        load: 2,
        animate: false,
        //animateIn: 'fadeInUp',
    });
    
    var vhFix = new VHChromeFix([
        {
            selector: '.fullHeightContainer',
            vh: 100
        },
        {
            selector: '.halfHeightContainer',
            vh: 50
        }
    ]);
    
    /*var hash = location.hash.replace(/^#/, ""); 
    if (hash) {
      var triggerEl = document.querySelector("#"+hash+"-tab" );
      var tab = new bootstrap.Tab(triggerEl);
      tab.show();
    }*/
});

(function($, window) {
	var adjustAnchor= function() {
		var $anchor = $(':target');
        //var pageHeaderHeight = 0;
		//var pageHeaderHeight = $("#pageHeader").height();
		if ($anchor.length > 0) {
			$('html, body').stop().animate({scrollTop: $anchor.offset().top+1}, 1000);
		}
	};
	$(window).on('hashchange load', function() {
		adjustAnchor();
	});
})(jQuery, window);

/* checkbox tree */
$(function() {
    $('input[type="checkbox"]').change(checkboxChanged);
    function checkboxChanged() {
        var $this = $(this),
            checked = $this.prop("checked"),
            container = $this.parent(),
            siblings = container.siblings();
        
        container.find('input[type="checkbox"]')
            .prop({
            indeterminate: false,
            checked: checked
        })
            .siblings('label')
            .removeClass('custom-checked custom-unchecked custom-indeterminate')
            .addClass(checked ? 'custom-checked' : 'custom-unchecked');
        checkSiblings(container, checked);
    }
    
    function checkSiblings($el, checked) {
        var parent = $el.parent().parent(),
            all = true,
            indeterminate = false;
        
        $el.siblings().each(function() {
            return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
        });
        
        if (all && checked) {
            parent.children('input[type="checkbox"]')
                .prop({
                indeterminate: false,
                checked: checked
            })
                .siblings('label')
                .removeClass('custom-checked custom-unchecked custom-indeterminate')
                .addClass(checked ? 'custom-checked' : 'custom-unchecked');
            checkSiblings(parent, checked);
        }
        else if (all && !checked) {
            indeterminate = parent.find('input[type="checkbox"]:checked').length > 0;
            parent.children('input[type="checkbox"]')
                .prop("checked", checked)
                .prop("indeterminate", indeterminate)
                .siblings('label')
                .removeClass('custom-checked custom-unchecked custom-indeterminate')
                .addClass(indeterminate ? 'custom-indeterminate' : (checked ? 'custom-checked' : 'custom-unchecked'));
            checkSiblings(parent, checked);
        }
        else {
            $el.parents("li").children('input[type="checkbox"]')
                .prop({
                indeterminate: true,
                checked: false
            })
                .siblings('label')
                .removeClass('custom-checked custom-unchecked custom-indeterminate')
                .addClass('custom-indeterminate');
        }
    }
});

Fancybox.bind('[data-fancybox="fancybox-gallery"]', {
    Thumbs: false,
    Toolbar: false,
    Image: {
        zoom: false,
        click: false,
        wheel: "slide",
    },
});

(function(jQuery){
	jQuery(window).load(function(){
		jQuery(".hscroll-content").mCustomScrollbar({
			axis:"x",
			theme:"dark",
			autoHideScrollbar:false,
			mouseWheel:{ enable: true, },
			keyboard:{ enable:true, },
			advanced:{
				updateOnContentResize:true,
				autoScrollOnFocus:false,
			}
		});
		jQuery(".vscroll-content").mCustomScrollbar({
			autoHideScrollbar:false,
			theme:"dark",
			mouseWheel:{ enable: true, },
			keyboard:{ enable:true, },
			advanced:{
				updateOnContentResize:true,
				autoScrollOnFocus:false
			}
		});
	});
})(jQuery);