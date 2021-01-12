$(function() {

  /* Плавный скролл до блока */

  $('.main-menu a[href^="#"]').click(function (e){
    e.preventDefault();

    let $activeSection = $( $(this).attr("href") );
    let sectionTop = $activeSection.offset().top;

    $('html,body').animate({ scrollTop: sectionTop - 50 }, 1000);

    $('.hamburger').removeClass('is-active');
    $('.main-menu').removeClass('active');
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
    
    $('.main-menu a[href^="#"].active').removeClass('active');
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
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      576: {
        items: 2,
        slideBy: 2,
      },
      992: {
        items: 3,
        slideBy: 3,
      },
      1200: {
        items: 4,
        slideBy: 4,
        nav: true,
      }
    },
  })

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('is-active');
    $('.main-menu').toggleClass('active');
  })

  $('.user-menu__btn').click(function() {
    $('.user-menu__box').toggleClass('active');
  })

  /* Выравниваение высоты ячеек на страницах услуг */

  let priceNumberRows = $('.price__item').eq(0).find('.price__row').length;
  let priceNumberColumn = $('.price__item').length;
  
  for(let i = 0; i < priceNumberRows; i++ ){
    let maxHeight = 0;

    for(let j = 0; j < priceNumberColumn; j++){
      height = $('.price__item').eq(j).find('.price__row').eq(i).innerHeight();
      if ( maxHeight < height ) {
        maxHeight = height;
      }
    }

    $('.price__item').each(function() {
      $(this).find('.price__row').eq(i).innerHeight(maxHeight);
    })
  }

  /* Фильтрация для доменных зон */

  $('#domain__list').isotope({
    itemSelector: '.domain__item',
    layoutMode: 'fitRows'
  });

  $('#domain__filtr button').click(function(){
    var filterValue = $(this).attr('data-filter');
    $('#domain__list').isotope({ filter: filterValue });

    $('#domain__filtr .active').removeClass('active');
    $(this).addClass('active');
  });
})