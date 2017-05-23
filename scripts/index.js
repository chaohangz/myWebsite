$(function () {
  var $body = $('body'),
      $wd = $(window),
      sideMenuLi = $('.side-menu li'),
      smGoWorks = $('.side-menu .go-works'),
      smGoAbout = $('.side-menu .go-about'),
      smGoContact = $('.side-menu .go-contact'),
      worksTop = $('#works').offset().top,
      aboutTop = $('#about').offset().top,
      contactTop = $('#contact').offset().top;

  // sidebar
  var insidePage = $('#inside-page'),
      sidebar = insidePage.find('.sidebar'),
      hamburger = insidePage.find('.hamburger'),
      whiteOverlay = insidePage.find('.white-overlay');

  $wd.scroll(function () {
    var windowST = $wd.scrollTop() + 1; //有一点小误差，添个1

    if ( windowST >= worksTop && windowST < aboutTop ) {
      sideMenuLi.removeClass('active');
      smGoWorks.addClass('active');
    };

    if ( windowST >= aboutTop && windowST < contactTop ) {
      sideMenuLi.removeClass('active');
      smGoAbout.addClass('active');
    };

    var wdHeight = $wd.height(),  // 窗口的高度
        dmHeight = $(document).height();  // 整个文档的高度

    // 文档的高度减去窗口的高度就是可滚动区域的高度
    // 如果滚动条大于等于滚动区域的高度表示滚动到最底部
    if ( windowST >= contactTop || windowST >= dmHeight - wdHeight ) {
      sideMenuLi.removeClass('active');
      smGoContact.addClass('active');
    };

  });

  $('.go-home').click(function () {
    $body
      .stop()
      .animate({scrollTop: '0'}, 1000, 'swing');

    // 在移动端点击后隐藏sidebar
    if ($wd.width() < 767) {
      sidebarHide();
    }
  });

  $('.go-works').click(function () {
     $body
       .stop()
       .animate({scrollTop: worksTop}, 1000, 'swing');

    if ($wd.width() < 767) {
      sidebarHide();
    }
  });

  $('.go-about').click(function () {
    $body
      .stop()
      .animate({scrollTop: aboutTop}, 1000, 'swing');

    if ($wd.width() < 767) {
      sidebarHide();
    }
  });

  $('.go-contact').click(function () {
    $body
      .stop()
      .animate({scrollTop: contactTop}, 1000, 'swing');

    if ($wd.width() < 767) {
      sidebarHide();
    }
  });

  // sidebar
  function sidebarHide() {
    whiteOverlay.hide();

    sidebar
      .stop(true, true)
      .animate({left: '-300px'}, 'fast');

    hamburger.show();
  }

  hamburger.click(function () {
    $(this).hide();

    sidebar
      .stop(true, true)
      .animate({left: '0'}, 'fast', 'swing');

    whiteOverlay.show();
  });

  whiteOverlay.click(function () {
    sidebarHide();
  })


  // animate
  var lightScreen = $('#light-screen'),
      iconMenu = lightScreen.find('.icon-menu'),
      author = lightScreen.find('.author'),
      title = lightScreen.find('.title'),
      mainMenu = lightScreen.find('.main-menu'),
      github = lightScreen.find('.github'),
      darkScreen = $('#dark-screen'),
      iconArr = darkScreen.find('.icon-arr'),
      message = darkScreen.find('.message'),
      goWorksButton = darkScreen.find('.go-works-button');

  lightScreen.mouseenter(function () {
    iconMenu.stop(true, true).fadeOut();
    author.stop(true, true).animate({top: '5%'}, 'fast');
    title.stop(true, true).fadeIn();
    mainMenu.stop(true, true).fadeIn();
    github.stop(true, true).animate({bottom: '5%'}, 'fast');
  }).mouseleave(function () {
    author.stop(true, true).animate({top: '-40px'}, 'fast');
    title.stop(true, true).fadeOut();
    mainMenu.stop(true, true).fadeOut();
    github.stop(true, true).animate({bottom: '-30px'}, 'fast');
    iconMenu.stop(true, true).fadeIn();
  })

  darkScreen.mouseenter(function () {
    iconArr.stop(true, true).fadeOut();
    message.stop(true, true).fadeIn();
    goWorksButton.stop(true, true).fadeIn();
  }).mouseleave(function () {
    message.stop(true, true).fadeOut();
    goWorksButton.stop(true, true).fadeOut();
    iconArr.stop(true, true).fadeIn();
  });


  // inside page
  $('.work-item').mouseenter(function () {
    $(this)
      .find('.work-item-title-active')
      .stop(true, true)
      .fadeIn();
    $(this)
      .find('b')
      .stop(true, true)
      .animate({bottom: '50%'})
  }).mouseleave(function () {
    $(this)
      .find('.work-item-title-active')
      .stop(true, true)
      .fadeOut();
    $(this)
      .find('b')
      .stop(true, true)
      .animate({bottom: '-40px'});
  });

});