(function() {

    'use strict';
  
    const breakpoint = window.matchMedia( '(min-width:60em)' );
  
    let mySwiper;
  
    const breakpointChecker = function() {
  
      if ( breakpoint.matches === false ) {
        if ( mySwiper !== undefined ) 
            mySwiper.destroy( true, true );
            return;
        } else if ( breakpoint.matches === true ) {
          return enableSwiper();
        }
    };
  
    const enableSwiper = function() {
  
     mySwiper = new Swiper('.section--home', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination--home',
            clickable: true
        },
        loop: false,
        mousewheel: true,
        slidesPerView: 1,
        speed: 700
    });
  
    };

    const initMassMediaSlider = function () {
        new Swiper ('.swiper-container--mm', {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-container--mm .swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-container--mm .swiper-button-next',
                prevEl: '.swiper-container--mm .swiper-button-prev',
            }
        });
    }
  
    breakpoint.addListener(breakpointChecker);
  
    breakpointChecker();
    //initMassMediaSlider();
  })();