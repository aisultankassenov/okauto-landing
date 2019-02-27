(function() {

    'use strict';

    let main = document.getElementById("main");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer");
    let isMenuActive = false;
    
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
            isMenuActive && toggleMenu();
        });

        document.getElementById("about-link").addEventListener("click", function() {
            if(!main.classList.contains("main--fixed")) main.classList.remove("main--fixed");
            goToSection("about");
            isMenuActive && toggleMenu();
        });

        document.getElementById("business-link").addEventListener("click", function() {
            isMenuActive && toggleMenu();
        });
    };

    function toggleMode () {
        document.querySelector("#toggleSiteMode").addEventListener("click", function() {
            document.getElementById("body").classList.toggle("dark");
        });
    }

    function clickOnButton () {
        document.querySelector("#menuToggle").addEventListener("click", function() {
            toggleMenu();
        });
    }

    function clickOnLinks () {
        document.querySelectorAll(".nav_link").forEach(function(el) {
            el.addEventListener("click", function () {
                if(el.getAttribute("data-section") !== null) {
                    if (el.getAttribute("data-section") !== "home" 
                    && main.classList.contains("main--fixed")) {
                        main.classList.remove("main--fixed");
                        header.classList.remove("header--fixed");
                        footer.classList.remove("footer--fixed");
                    } 
                    goToSection(el.getAttribute("data-section"));
                } 

                el.classList.add("nav_link--active");
                toggleMenu();
            });
        });
    }

    function toggleMenu () {
        document.getElementById("nav").classList.toggle("nav--openned");
        document.getElementById("main").classList.toggle("main--hidden");
        document.getElementById("menuToggle").classList.toggle("nav_btn--active")
        isMenuActive = true;
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