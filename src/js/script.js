jQuery(function ($) {
    $(".js-faq-question").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("is-open");
    });
  });

  function delayScrollAnime() {
    var time = 0.2; //遅延時間を増やす秒数の値
    var value = time;
    $(".delay").each(function () {
      var parent = this; //親要素を取得
      var elemPos = $(this).offset().top; //要素の位置まで来たら
      var scroll = $(window).scrollTop(); //スクロール値を取得
      var windowHeight = $(window).height(); //画面の高さを取得
      var childs = $(this).children(); //子要素を取得

      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
        $(childs).each(function () {
          if (!$(this).hasClass("fadeUp")) {
            //アニメーションのクラス名が指定されているかどうかをチェック

            $(parent).addClass("play"); //親要素にクラス名playを追加
            $(this).css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
            $(this).addClass("fadeUp"); //アニメーションのクラス名を追加
            value = value + time; //delay時間を増加させる

            //全ての処理を終わったらplayを外す
            var index = $(childs).index(this);
            if (childs.length - 1 == index) {
              $(parent).removeClass("play");
            }
          }
        });
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
  }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  jQuery(function ($) {
    $(window).on("load", function () {
        endLoading();
    });

    function endLoading() {
        setTimeout(function () {
            $(".js-loading").fadeOut(1000);
        }, 2000);
    }
});

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
