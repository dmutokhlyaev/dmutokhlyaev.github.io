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

  /* Следующий вопрос, есле есть ответ*/

  for (let i = 0; i < $('.test .btn-next').length; i++) {

    $('.test .btn-next').eq(i).click(function() {

      for (let j = 0; j < $('.test__step-'+ (i + 1) +' input').length; j++) {

        if( $('.test__step-'+ (i + 1) +' input').eq(j).prop("checked") ) {

          $('.test__step-' + (i + 1) ).addClass('test__step_hidden');
          $('.test__step-' + (i + 2) ).removeClass('test__step_hidden');

          $('.progress__performed').width( (i + 2) * 20 + '%');

          $('.progress__count').text(i + 2);
          break
        };
      };
    });
  };

  $('.test__step-1 button').click(function() {

    for (var i = 0; i < $('.test__step-1 input').length; i++) {
      
      if( $('.test__step-1 input').eq(i).prop("checked") ) {

        $('.test__step-1').addClass('test__step_hidden');
        $('.test__step-2').removeClass('test__step_hidden');
        break
      };
    };
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
});