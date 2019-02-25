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
  
        let header = document.querySelector(".header");
        let footer = document.querySelector(".footer");
        let pagination = document.querySelector(".swiper-pagination--home");

        mySwiper = new Swiper('.section--home', {
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination--home',
                clickable: true
            },
            loop: false,
            mousewheel: true,
            slidesPerView: 1,
            speed: 700,
            on: {
                reachEnd: function () {
                    header.classList.add('header--white');
                    footer.classList.add('footer--white');
                    pagination.classList.add('swiper-pagination--white');
                },
                fromEdge: function() {
                    if (header.classList.contains('header--white')) {
                        header.classList.remove('header--white');
                        footer.classList.remove('footer--white');
                        pagination.classList.remove('swiper-pagination--white');
                    }
                }
            }
        });
  
    };

    const initMassMediaSlider = function () {
        new Swiper ('.swiper-container--mm', {
            loop: false,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-container--mm .swiper-pagination--mm',
            },
            navigation: {
                nextEl: '.swiper-container--mm .swiper-button-next',
                prevEl: '.swiper-container--mm .swiper-button-prev',
            }
        });
    }
  
    breakpoint.addListener(breakpointChecker);
  
    breakpointChecker();
    initMassMediaSlider();
  })();