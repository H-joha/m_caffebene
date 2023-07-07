$(function () {
  // 헤더 : 전체 메뉴 버튼
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();
    $('#header .dimmed').show();
    $('#header .all_menu .btn_close').fadeIn();
    $('body').addClass('on');
    $('#header .all_menu').addClass('on');
  });

  $('#header .all_menu .btn_close').on('click', function () {
    $('#header .dimmed').fadeOut();
    $(this).fadeOut();
    $('body').removeClass('on');
    $('#header .all_menu').removeClass('on');
  });

  $('#header .dimmed').on('click', function () {
    $('#header .all_menu .btn_close').trigger('click');
  });

  // 헤더 : 검색창
  $('#header .btn_search').on('click', function () {
    $(this).toggleClass('on');
    $('#header .search_area').slideToggle();
  });

  // 전체 메뉴 : depth02
  var gnb_a = $('#header .gnb>li>a');

  $('#header .gnb .depth02').hide();

  $(gnb_a).on('click', function () {
    $(this).addClass('active').parent().siblings().find(gnb_a).removeClass('active');
    $(this).parent().toggleClass('on').siblings().removeClass('on');
    $(this).next().slideToggle().parent().siblings().find('.depth02').slideUp();
  });

  // 섹션 : 메인 슬라이더
  var mainSlider = new Swiper('.main_slider', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // 섹션 : 메뉴 슬라이더
  if ($('.main_menu .menu_slider').length) {
    var menuSlider = new Swiper('.main_menu .menu_slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      scrollbar: {
        el: '.main_menu .swiper-scrollbar',
      },
    });
    menuSlider.slideTo(1, 0);
  }

  // 섹션 : 어바웃 슬라이더
  var aboutSlider = new Swiper('.main_about .about_slider', {
    spaceBetween: 100,

    scrollbar: {
      el: '.main_about .swiper-scrollbar',
    },
  });

  // ======서브페이지======

  // about 페이지 : 애니메이션효과
  $('[class*=animate_fade]').each(function () {
    var _this = $(this);

    $(window).on('scroll', function () {
      var posY = _this.offset().top;
      var st = $(this).scrollTop();

      if (st > posY - $(this).outerHeight() + 50) {
        _this.addClass('on');
      } else {
        _this.removeClass('on');
      }
    });
  });

  // menu 페이지 : menu_list
  $('.menu_page .checkbox_wrap').on('click', function () {
    var cate = $(this).data('cate');

    if (cate === 'all') {
      $('.menu_list li').show();
    } else {
      $('.menu_list li').hide();
      $('.menu_list li[data-cate=' + cate + ']').show();
    }
  });

  // fag 페이지 : faq
  $('.faq_page .faq_wrap .answer_wrap').hide();

  $('.faq_page .faq_wrap .question_wrap').on('click', function () {
    $(this).next().toggle().parent().siblings().find('.answer_wrap').hide();
  });
});
