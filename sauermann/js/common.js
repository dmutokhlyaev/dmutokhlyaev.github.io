$(function(){

	/* Слайдер на главной */

	$('.first-slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		appendDots: $('.first-slider__nav'),
		fade: true,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
	});

	$('.first-slider').on('setPosition', function() {

		$('.first-slider__item').height( $('.offer').innerHeight() )
	
	});

	/* Слайдер с новинками */

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

	$('.novelty__slider').on('setPosition', function() {

		var slidMaxHeight = $('.novelty__slider .product-card').eq(0).innerHeight();

		for (let i = 0; i < $('.novelty__slider .product-card').length; i++) {

			if ( $('.novelty__slider .product-card').eq(i).innerHeight() > slidMaxHeight ) {
				slidMaxHeight = $('.novelty__slider .product-card').eq(i).innerHeight();
			}
		}

		$('.novelty__container').css('min-height', slidMaxHeight);
		$('.novelty__slider .product-card').innerHeight(slidMaxHeight);
	});

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


	$('.discount-slider').slick({
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
	})

	/* Всплывающее окно*/

	$('#button__popup').click(function() {
		$('.popup').removeClass('popup_hidden');
	});

	$('.button-close').click(function() {
		$('.popup').addClass('popup_hidden');
	});
});