jQuery(function ($) {
    const service_swiper = new Swiper(".js-service-swiper", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', //「次へボタン」要素の指定
            prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
        },
    });
});


jQuery(function ($) {
    const mv_swiper = new Swiper(".js-mv-swiper", {
        loop: true,
        speed: 2000,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
});
