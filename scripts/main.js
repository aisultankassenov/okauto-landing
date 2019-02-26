(function() {

    'use strict';

    let main = document.getElementById("main");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer");
    
    function init() {
        toggleMode();
        clickOnButton();
        clickOnLinks();
    
        document.getElementById("home-link").addEventListener("click", function() {
            if(!main.classList.contains("main--fixed")) {
                main.classList.add("main--fixed");
                header.classList.add("header--fixed");
                footer.classList.add("footer--fixed");
            }
            goToSection("home");
        });

        document.getElementById("about-link").addEventListener("click", function() {
            if(!main.classList.contains("main--fixed")) main.classList.remove("main--fixed");
            goToSection("about");
        });
    };

    function toggleMode () {
        document.querySelector("#toggleSiteMode").addEventListener("click", function() {
            document.getElementById("body").classList.toggle("dark");
        });
    }

    function clickOnButton () {
        document.querySelector("#menuToggle").addEventListener("click", function() {
            this.classList.toggle("nav_btn--active")
            toggleMenu();
        });
    }

    function clickOnLinks () {
        document.querySelectorAll("#nav a").forEach(function(el) {
            el.addEventListener("click", function () {
                if(el.classList.contains("link")) {
                    if (el.getAttribute("data-section") !== "home" 
                    && main.classList.contains("main--fixed")) {
                        main.classList.remove("main--fixed");
                        header.classList.remove("header--fixed");
                        footer.classList.remove("footer--fixed");
                    } 
                    goToSection(el.getAttribute("data-section"));
                } 

                el.classList.toggle("pure-blue");
                toggleMenu();
            });
        });
    }

    function toggleMenu () {
        document.getElementById("nav").classList.toggle("nav--openned");
        document.getElementById("main").classList.toggle("main--hidden");
    }

    function goToSection(section) {
        document.querySelector(".section--active").classList.remove("section--active");
        document.querySelector(".section--" + section).classList.add("section--active");
    }

    function show (el, style) {
        el.style.display = style;
    }

    function hide (el) {
        el.style.display = "none";
    }

    init();
  })();