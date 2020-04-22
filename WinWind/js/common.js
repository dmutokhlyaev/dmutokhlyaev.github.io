$(function(){
  $('.choice .btn').click(function () {
    $('.choice__item').toggleClass('choice__item_hidden');
  })


  for (let i = 0; i < $('.moreover .item').length; i++) {

    $('.moreover__button').eq(i).click(function() {
      $('.moreover .item').eq(i).toggleClass('item_hidden');
    });

    $('.moreover .close').eq(i).click(function() {
      $('.moreover .item').eq(i).addClass('item_hidden');
    })

  };

});