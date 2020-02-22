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
	})
});