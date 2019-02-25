(function() {

    'use strict';

    let main = document.getElementById("main");
    
    function init() {
        toggleMode();
        clickOnButton();
        clickOnLinks();
    
        document.getElementById("home-link").addEventListener("click", function() {
            if(!main.classList.contains("main--fixed")) main.classList.add("main--fixed");
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
            toggleMenu();
        });
    }

    function clickOnLinks () {
        document.querySelectorAll("#nav a").forEach(function(el) {
            el.addEventListener("click", function () {
                if(el.classList.contains("link")) {
                    if (el.getAttribute("data-section") !== "home" 
                    && el.getAttribute("data-section") !== "about"
                    && main.classList.contains("main--fixed")) {
                        main.classList.remove("main--fixed");
                    }
                    goToSection(el.getAttribute("data-section"));
                } 

                toggleMenu();
            });
        });
    }

    function toggleMenu () {
        document.getElementById("nav").classList.toggle("nav--openned");
        document.getElementById("main").classList.toggle("main--hidden");
        document.getElementById("cross").classList.toggle("cross--displayed");
        document.getElementById("hamburger").classList.toggle("hamburger--hidden");
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