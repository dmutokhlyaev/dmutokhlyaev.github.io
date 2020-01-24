$(function() {

	$('header .hamburger').click(function(event){
		$('header .right-line').toggleClass('open');
		setTimeout(function() {
			$('header .hamburger').toggleClass('is-active');
		}, 500);
	});


	$('#services .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				smartSpeed: 700,
			},
			768: {
				items: 2,
				slideBy: 2,
				smartSpeed: 600,
			},
			1200: {
				items: 3,
				slideBy: 3,
				smartSpeed: 400,
			}
		}
	});

	$('#comments .owl-carousel').owlCarousel({
		items: 1,
		smartSpeed: 700,
	});

	$('#partners .owl-carousel').owlCarousel({
		margin: 50,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 2,
				slideBy: 2,
			},
			480: {
				items: 3,
				slideBy: 3,
			},
			992: {
				items: 4,
				slideBy: 4,
			}
		}
	});

	$('#application select').selectize({});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()){
			$('#up').addClass('open');
		} else {
			$('#up').removeClass('open');
		}
	});

	$('#up').click(function(){
		$('html, body').stop().animate({scrollTop : 0}, 600);
	});

});
