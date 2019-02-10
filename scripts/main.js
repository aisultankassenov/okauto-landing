(function() {

    'use strict';
    
    function init() {
        document.querySelector("#menuToggle").addEventListener("click", function() {
            document.getElementById("nav").classList.toggle("nav--openned");
            document.getElementById("main").classList.toggle("main--hidden");
            document.getElementById("cross").classList.toggle("cross--displayed");
            document.getElementById("hamburger").classList.toggle("hamburger--hidden");
        });
    };

    init();
  })();