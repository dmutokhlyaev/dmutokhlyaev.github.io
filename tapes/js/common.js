$(function(){
	$('.hamburger').click(function() {

		if ( $(this).hasClass('is-active') ) {

			$(this).removeClass('is-active');
			$('.menu').height( 0 );

		} else {

			$(this).addClass('is-active');

			$('.menu').height( $('.menu__list').innerHeight() );
		}

	});
});