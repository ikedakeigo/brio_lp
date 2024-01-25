jQuery(function ($) {
    const service_swiper = new Swiper(".js-service-swiper", {
        loop: true,
        speed: 1000,
        slidesPerView: 2,
        centeredSlides: true,
        // spaceBetween: 60,
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

jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
        $(".js-humburger").click(function () {
            $(this).toggleClass("is-open");
            if ($(this).hasClass("is-open")) {
                openDrawer();
            } else {
                closeDrawer();
            }
        });

        // backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function () {
            closeDrawer();
        });

        // resizeイベント
        $(window).on('resize', function() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                closeDrawer();
            }
        });
    });

    function openDrawer() {
        $(".js-drawer").addClass("is-open");
        $(".js-humburger").addClass("is-open");
    }

    function closeDrawer() {
        $(".js-drawer").removeClass("is-open");
        $(".js-humburger").removeClass("is-open");
    }
});
