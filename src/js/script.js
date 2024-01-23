jQuery(function ($) {
    var service_swiper = new Swiper(".js-service-swiper", {
        loop: true,
        speed: 2000,
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 5,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
