var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
});

function toggleMenu() {
    document.getElementById("nav").classList.toggle("nav--openned");
    document.getElementById("main").classList.toggle("main--hidden");
    document.getElementById("cross").classList.toggle("cross--displayed");
    document.getElementById("hamburger").classList.toggle("hamburger--hidden");
};

document.querySelector("#toggleSiteMode").addEventListener("change", function() {
    document.getElementById("body").classList.toggle("night");
});

[].forEach.call(document.querySelectorAll(".nav-a "),function(link) {
   link.addEventListener("click", function() {toggleMenu();});
});