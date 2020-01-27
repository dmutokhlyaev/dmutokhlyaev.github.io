$(function() {
	$('.navbar-header .hamburger').click(function(){
		$('.navbar-header .main-menu').toggleClass('open');
		$('.navbar-header .hamburger').toggleClass('is-active');
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
		}
	});

	$('.popup-content').magnificPopup({
        type: 'inline'
    });

    $('#equipment .owl-carousel').owlCarousel({
    	responsive: {
            0: {items: 1},
            650: {items: 2},
            900: {items: 3},
            1200: {items: 4},
        },
    	margin: 30,
    });

    $('#partners .owl-carousel').owlCarousel({
    	responsive: {
            0: {items: 2, slideBy: 2},
            600: {items: 3, slideBy: 3},
            800: {items: 4, slideBy: 4},
            1000: {items: 5, slideBy: 5},
        },
    	margin: 30,
    	dots: false,
    	nav: true,
    	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });

    $('#reviews .owl-carousel').owlCarousel({
    	responsive: {
            0: {items: 1},
            700: {items: 2},
            1000: {items: 3},
        },
    	margin: 30,
    });

    $('.form select').selectize({});

	// Анимация чисел
	var countShow = false;

	$(window).scroll(function(){
		if (($(window).scrollTop() > $('.count').offset().top - $(window).height()) && !countShow) {
			$('.count').spincrement({
	        	thousandSeparator: " ",
	        	duration: 2000,
	        	leeway: 0,
	        	easing: 'linear',
    		});

    		countShow = true;
		};
	});
});