$(function(){

	$('.home-slider').slick({
		prevArrow: $('.home-slider__prev'),
		nextArrow: $('.home-slider__next'),
		autoplay: true,
		autoplaySpeed: 10000,
		fade: true,
		draggable: false,
	});

	$('.home-slider').on('beforeChange', function(event, slick, currentSlide, nextSlider) {
		var sliderCount = '0' + (nextSlider + 1) + '/03'

		$('.home-slider__count').text(sliderCount);
	});


	$('.home-slider').on('setPosition', function() {

		$('.home-slider__item').height( $('.home').height() );
	
	});

	$('.button_search').click( function() {

		$('.main-menu').toggleClass('close');
		$('.search').toggleClass('close');

		return false;
	});

	$('.hamburger').click( function() {

		if ( $('.hamburger').hasClass('is-active') ) {

			$('.hamburger').removeClass('is-active');
			$('.main-menu').removeAttr('style');

		} else {

			$('.hamburger').addClass('is-active');
			$('.main-menu').height( $('.main-menu ul').innerHeight() );

		}
	});

	for (let i = 0; i < $('.filter-item').length; i++) {

		$('.filter-item__title').eq(i).click(function() {

			$('.filter-item').eq(i).toggleClass('close');

		});
	}

	for (let i = 0; i < $('.product__menu-item').length; i++) {
		
		$('.product__menu-item').eq(i).click( function() {

			$('.product__menu-item.active').removeClass('active');
			$('.product__menu-item').eq(i).addClass('active');

			$('.product__item.open').removeClass('open');
			$('.product__item').eq(i).addClass('open');
		});
	};

	$('.nice-input').niceNumber();
});