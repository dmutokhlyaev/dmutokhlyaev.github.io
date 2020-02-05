$(function(){
	/* Главное меню на малых экранах */

	$('.hamburger').click(function() {

		if ( $(this).hasClass('is-active') ) {

			$(this).removeClass('is-active');
			$('.menu').removeAttr('style');

		} else {

			$(this).addClass('is-active');

			$('.menu').height( $('.menu__list').innerHeight() );
		}

	});

	/* Скролл до секции */

	$("a[href^='#']").click(function(){
            var _href = $(this).attr("href");

            $('.hamburger').removeClass('is-active');
			$('.menu').removeAttr('style');

            $("html, body").animate({scrollTop: $(_href).offset().top -60 + "px"}, 600);
            return false;
    });

    /* Попап*/

	$('.home__button').click(function() {
		$('.popup').addClass('popup_active');
	});

	$('.popup__close').click(function() {
		$('.popup').removeClass('popup_active');
	});
});