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

	$('.category .slider').slick({
		accessibility: false,
		arrows: false,
		draggable: false,
		fade: true,
	});

	$('.reviews .slider').slick({
		slidesToShow: 3,
		infinite: false,
		prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	})
});