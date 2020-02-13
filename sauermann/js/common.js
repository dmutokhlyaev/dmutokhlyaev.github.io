$(function(){
	$('.first-screen__slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		appendDots: $('.first-screen__dots'),
		fade: true,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
	});

	/* Устанавливает одинаковую высоту для слайдов на первом экране */
	
	let slidMaxHeight = $('.first-screen__slider .first-screen__product').eq(0).innerHeight();
	

	for (let i = 0; i < $('.first-screen__slider .first-screen__product').length; i++) {

		if ( $('.first-screen__slider .first-screen__product').eq(i).innerHeight() > slidMaxHeight ) {
			slidMaxHeight = $('.first-screen__slider .first-screen__product').eq(i).innerHeight();
		}
	}

	$('.first-screen__slider .first-screen__product').innerHeight(slidMaxHeight);

	$('.novelty__slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		dots: true,
		appendArrows: $('.novelty__nav'),
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		appendDots: $('.novelty__nav'),
		responsive: [
	        {
	          breakpoint: 1200,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 2,
	          }
	        },
	        {
	          breakpoint: 992,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            arrows: false,
	            rows: 2,
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            rows: 3,
	          }
	        },
	    ],
	});

	/* Устанавливает одинаковую высоту для слайдов Новинок */

	slidMaxHeight = $('.novelty__slider .product-card').eq(0).innerHeight();

	for (let i = 0; i < $('.novelty__slider .product-card').length; i++) {

		if ( $('.novelty__slider .product-card').eq(i).innerHeight() > slidMaxHeight ) {
			slidMaxHeight = $('.novelty__slider .product-card').eq(i).innerHeight();
		}
	}

	$('.novelty__container').css('min-height', slidMaxHeight);
	$('.novelty__slider .product-card').innerHeight(slidMaxHeight);

	/* Главное меню на мобильных */

	$('.hamburger').click(function() {
		if ( $('.hamburger').hasClass('is-active') ) {

			$('.hamburger').removeClass('is-active');
			$('.main-menu').removeAttr('style');

		} else {
			$('.hamburger').addClass('is-active');
			$('.main-menu').height( $('.main-menu ul').innerHeight() );
		}
	});
});