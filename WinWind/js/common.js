$(function(){

  /* Знакомая ситуация */
  $('.choice .btn').click(function () {
    $('.choice__item').toggleClass('choice__item_hidden');
  })

 /* Преимущества */

  for (let i = 0; i < $('.moreover .item').length; i++) {

    $('.moreover__button').eq(i).click(function() {
      $('.moreover .item').eq(i).toggleClass('item_hidden');
    });

    $('.moreover .close').eq(i).click(function() {
      $('.moreover .item').eq(i).addClass('item_hidden');
    })
  };

  /* Тест */

  $('.test__slider').slick({
    infinite: false,
    prevArrow: false,
    nextArrow: $('.test .btn-next'),
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          adaptiveHeight: true,
        }
      },
    ],
  });

  /* Активация кнопки далее */

  $('.test__item').each(function() {

    $(this).find('label').click(function() {

      $(this).parents('.test__item').find('.btn-next').addClass('btn-next_visible');

    });
  });

  /* Счётчик и полоса прогресса */

  $('.test__slider').on('afterChange', function(event, slick, currentSlide){

    $('.progress__count').text(currentSlide + 1);
    $('.progress__performed').width( 20 * (currentSlide + 1) + '%' );

  });

  /* При нажатии на текстовое поле подсвечивается карточка */

  $('.test__step-2 input[type="text"]').click(function() {
    $('.test__step-2 input[type="text"]').parent().trigger('click');
  });

  /* Слайдер */

  $('.reviews__list').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    appendDots: $('.reviews__dots'),
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });

  /* Попап окно */

  $('.popup-link').magnificPopup({
    type: 'inline',
    removalDelay: '300',
  });

  /* Галерея на странице продукта */

  $('.fotorama').fotorama({
   width: '100%',
   height: 425,
   nav: 'thumbs',
   thumbwidth: 150,
   thumbheight: 100,
  }); 
});