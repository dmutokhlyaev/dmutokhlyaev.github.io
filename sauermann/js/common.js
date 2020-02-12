$(function(){
	$('.header__slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		appendDots: $('.header__dots'),
		fade: true,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
	});

	/* Устанавливает одинаковую высоту для слайдов на первом экране */
	
	let slidMaxHeight = $('.header__slider .header__product').eq(0).innerHeight();
	

	for (let i = 0; i < $('.header__slider .header__product').length; i++) {

		if ( $('.header__slider .header__product').eq(i).innerHeight() > slidMaxHeight ) {
			slidMaxHeight = $('.header__slider .header__product').eq(i).innerHeight();
		}
	}

	$('.header__slider .header__product').innerHeight(slidMaxHeight);

	$('.novelty__slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		dots: true,
		appendArrows: $('.novelty__nav'),
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		appendDots: $('.novelty__nav'),
	});

	/* Устанавливает одинаковую высоту для слайдов Новинок */

	slidMaxHeight = $('.novelty__slider .product-card').eq(0).innerHeight();

	for (let i = 0; i < $('.novelty__slider .product-card').length; i++) {

		if ( $('.novelty__slider .product-card').eq(i).innerHeight() > slidMaxHeight ) {
			slidMaxHeight = $('.novelty__slider .product-card').eq(i).innerHeight();
		}
	}

	$('.novelty__container').innerHeight(slidMaxHeight);
	$('.novelty__slider .product-card').innerHeight(slidMaxHeight);
});