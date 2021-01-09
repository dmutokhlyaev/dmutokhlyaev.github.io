$(function() {

  /* Плавный скролл до блока */

  $('.main-menu a').click(function (e){
    e.preventDefault();

    let $activeSection = $( $(this).attr("href") );
    let sectionTop = $activeSection.offset().top;

    let timeAnimation = Math.abs($(window).scrollTop() - sectionTop) / 1.5;
    $('html,body').animate({ scrollTop: sectionTop - 100 }, timeAnimation);
  })

  /* Функции зависящие от скролла страницы. Вызывает при загрузке страницы и при скролле. */

  let checkScroll = function() {

    /* Фиксация шапки */

    if($(window).scrollTop() > 50){
      $('.header').addClass('header_fixed');
    } else {
      $('.header').removeClass('header_fixed');
    }

    /* Активный пунк меню */

    let activeSectionsNumber = 0;
    let sectionList = $('section[id]');

    for (i = 0; i < sectionList.length; i++) {
      let sectionTop = sectionList.eq(i).offset().top;

      if ( $(window).scrollTop() > sectionTop - 150 ) {
        activeSectionsNumber = i;
      }
    }

    let activeSectionId = '#' + sectionList.eq(activeSectionsNumber).attr('id');
    
    $('.main-menu .active').removeClass('active');
    $('.main-menu [href="' + activeSectionId + '"]').addClass('active');
  }

  checkScroll();

  $(window).scroll(function () {
    checkScroll();
  });

  $('.team__list').owlCarousel({
    items: 4,
    margin: 30,
  })

  
})