$(function() {

  /* Плавный скролл до блока */

  $('.main-menu a').click(function (e){
    e.preventDefault();

    let $activeSection = $( $(this).attr("href") );
    let sectionTop = $activeSection.offset().top;

    $('html,body').animate({ scrollTop: sectionTop - 50 }, 1000);
  })

  /* Функции зависящие от скролла страницы. Вызывает при загрузке страницы и при скролле. */

  let checkScroll = function() {

    /* Фон для шапки */

    if($(window).scrollTop() > 0){
      $('.header').addClass('header_bg');
    } else {
      $('.header').removeClass('header_bg');
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
    slideBy: 4,
    margin: 30,
    nav: true,
    navText: ['', ''],
  })

  
})