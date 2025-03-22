// ハンバーガーメニューーーーーーーーーーーーーーーーーーーー

jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").slideToggle(300);
  jQuery("body").toggleClass("is-fixed");
});

jQuery("#js-drawer-content")
  .find("a")
  .on("click", function (e) {
    // e.preventDefault();
    // ↑
    // aタグをクリックして選択をしたのにも関わらず、e.preventDefault();で、そのaタグを選択をしていないということになってうまくid指定先に遷移しなかった
    jQuery("#js-drawer-icon").trigger("click");
  });

jQuery('a[href^="#"]').on("click", function (e) {
  //jQuery('[ 属性 ^= "値" ]')で、指定した"値"が属性の値と前方一致する要素を選択する、というもの。今回の場合はhrefが＃で始まっているaタグについてclickされた場合という意味
  const speed = 300;
  const id = jQuery(this).attr("href");
  // jQuery(this).attr("href")は、jQueryを使用して現在の要素（この場合、クリックされたリンク）のhref属性の値を取得する方法です。
  // jQuery(this): イベントが発生した要素をjQueryオブジェクトとして参照します。
  // .attr("href"): その要素のhref属性の値を取得します。
  // したがって、jQuery(this).attr("href")は、クリックされたリンクのhref属性の値を取得するために使用されます。通常、これはリンク先のIDやURLを取得するのに役立ちます。

  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top + -64; //ヘッダーの高さ６４を引いてスクロールする

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

//about セクションスライダー-------------------

const swiper = new Swiper("#js-about-swiper", {
  // Optional parameters
  loop: true,
  loopedSlides: 10,
  speed: 3000,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
  },
});

// prizesモーダルーーーーーーーーーーーーーーーーーーーーーーー

jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  let target = jQuery(this).data("target");
  jQuery("#" + target)[0].showModal();
  jQuery("html, body").css("overflow", "hidden");
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery(this).parents(".js-prizes-modal")[0].close();
  jQuery("html, body").css("overflow", "auto");
  jQuery(document.activeElement).blur();
});

//-----------------------------------------
// spotsのスワイパー
// ーーーーーーーーーーーーーーーーーーーーーーーー

const spotsSwiper = new Swiper("#js-spots-swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.5273,
  centeredSlides: true,
  keyboard: true,

  navigation: {
    nextEl: "#js-spots-next",
    prevEl: "#js-spots-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    900: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3.2234,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },
});

// FQAアコーディオン-----------------------

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).hasClass("is-open")) {
    jQuery(this).removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

// お問い合わせーーーーーーーーーーーーーーーーーーーーー

const form = jQuery("#js-form");
const inputElements = form.find(".js-form-input");

form.on("submit", function (e) {
  e.preventDefault();

  inputElements.removeClass("is-error");
  const isValid = form[0].checkValidity();
  if (isValid) {
    alert("騾∽ｿ｡螳御ｺ�");
    form[0].reset();
  }
});

inputElements.on("invalid", function () {
  jQuery(this).addClass("is-error");
});

inputElements.on("input", function () {
  if (this.checkValidity()) {
    jQuery(this).removeClass("is-error");
  }
});

// ページトップーーーーーーーーーーーーーーーーーーーーーーーーー

const pagetop = jQuery("#js-pagetop-button");
jQuery(window).on("scroll", function () {
  if (jQuery(window).scrollTop() > 300) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});

pagetop.on("click", function () {
  jQuery("body, html").animate({ scrollTop: 0 }, 2500);
});
