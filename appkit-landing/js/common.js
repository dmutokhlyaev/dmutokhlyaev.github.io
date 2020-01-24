$(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0){
			$('#nav').addClass('scroll');
		} else {
			$('#nav').removeClass('scroll');
		}

		if ($(this).scrollTop() > 550) {
			var countSections = 0;

			for (var i = 0; i < $('.section').length; i++){
				if ($(this).scrollTop() + 100 > $('.section').eq(i).offset().top) {
					countSections++;
				}
			}

			var activeId = '#' + $('.section').eq(countSections - 1).attr('id');

			for (var i = 0; i < $('#nav .main-menu a').length; i++) {
				if ($('#nav .main-menu a').eq(i).attr('href') == activeId){
					$('#nav .main-menu a').eq(i).parent().addClass('active');
				}
				else {
					$('#nav .main-menu a').eq(i).parent().removeClass('active');
				}
			};
		}
		else {
			$('#nav .main-menu a').parent().removeClass('active');
		};

	});

	$('#nav .hamburger').click(function() {
		if ($('#nav').hasClass('click')) {
			$('#nav .main-menu').removeClass('open');
			setTimeout(function(){
				$('#nav').removeClass('click');
				$('#nav .hamburger').removeClass('is-active');
			}, 300);
		}
		else {
			$('#nav').addClass('click');
			setTimeout(function(){
				$('#nav .main-menu').addClass('open');
				$('#nav .hamburger').addClass('is-active');
			}, 300);
		}
	});

    $("#nav a").click(function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;
        console.log(top);
        console.log($(window).scrollTop());
        var time = Math.abs($(window).scrollTop() - top) / 1.5;
        console.log(time);

        //анимируем переход на расстояние - top за time мс
        $('body,html').animate({scrollTop: top}, time);

        $('#nav').removeClass('click');
        $('#nav .main-menu').removeClass('open');
        $('#nav .hamburger').removeClass('is-active');
    });

	$('#promo .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
	});

	var owlFeatures = $('#features .owl-carousel').owlCarousel({
		items: 1,
		dots: false,
		mouseDrag: false,
		animateOut: 'fadeOut',
	});

	var featuresItems = $('#features .features-items li');

	var addClassFeaturesItem = function(i) {
		featuresItems.eq(i).click(function(){
			featuresItems.removeClass('active');
			featuresItems.eq(i).addClass('active');
			owlFeatures.trigger('to.owl.carousel', i)
		});
	};

	for (var i = 0; i < featuresItems.length; i++){
		addClassFeaturesItem(i);
	};
});
