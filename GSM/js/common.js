$(function(){
	$('.open-additional-fields label').click(function() {
		if( $('.open-additional-fields input' ).is(':checked')){
			$('.additional-fields').removeClass('open');
		} else {
			$('.additional-fields').addClass('open');
		}
	})

	$('.select').selectize({});

	for (let i = 0; i < $('.filter').length; i++) {
		$('.filter').eq(i).click(function() {
			$('.filter').removeClass('active');
			$(this).addClass('active');

			$('.slick-slider').slick( 'slickGoTo', i );
		});
	}

	$('.slick-slider').slick({
		accessibility: false,
		arrows: false,
		draggable: false,
		fade: true,
	});
});