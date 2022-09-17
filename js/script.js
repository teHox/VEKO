window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const burgerBtn = document.querySelector(".burger-btn");
  const headerMenu = document.querySelector(".header__menu");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-btn_active");
    headerMenu.classList.toggle("header__menu_active");
  });
  const popUpRefLeft = document.querySelector(".consultation__prev");
  const popUpRefRight = document.querySelector(".consultation__next");
  new Swiper(".consultation-slider", {
    spaceBetween: 60,
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 60
      },
      100: {
        slidesPerView: 1.6,
        spaceBetween: 60,
      },
    },
    navigation: {
      nextEl: popUpRefRight,
      prevEl: popUpRefLeft,
    },
  });

  const answer = document.querySelectorAll(".q-a__answer");

  answer.forEach((e) => {
    let qaTop = e.querySelector(".q-a__top");
    let plus = e.querySelector(".q-a__plus");
    let qaBottom = e.querySelector(".q-a__bottom");
    let cont = e.querySelector(".q-a__cont");

    qaTop.addEventListener("click", () => {
      plus.classList.toggle("q-a__plus_active");
      qaBottom.classList.toggle("q-a__bottom_active");
      cont.classList.toggle("q-a__cont_active");
    });
  });
}
window.addEventListener("DOMContentLoaded", domLoaded);

// function domLoaded() {
//   const burgerBtn = document.querySelector(".burger-btn");
//   const headerMenu = document.querySelector("#menu");

//   burgerBtn.addEventListener("click", () => {
//     burgerBtn.classList.toggle("burger-btn_active");
//     headerMenu.classList.toggle("header__menu_active");
//   });

//   const news = document.querySelectorAll(".news");

//   news.forEach((e) => {
//     const popUpRefLeft = e.querySelector(".popup-slider__prev");
//     const popUpRefRight = e.querySelector(".popup-slider__next");

//     const thumbSlider = e.querySelector(".popup-thumbs");
//     const popupThumbs = new Swiper(thumbSlider, {
//       preloadImages: false,
//       lazy: true,
//       spaceBetween: 10,
//       slidesPerView: 3.5,
//       freeMode: true,
//       watchSlidesVisibility: true,
//       watchSlidesProgress: true,
//     });

//     const slider = e.querySelector(".popup-slider");
//     new Swiper(slider, {
//       preloadImages: false,
//       lazy: true,
//       slidesPerView: 1,
//       navigation: {
//         nextEl: popUpRefRight,
//         prevEl: popUpRefLeft,
//       },
//       thumbs: {
//         swiper: popupThumbs,
//       },
//     });
//   });

//   const article = document.querySelectorAll(".article");

//   article.forEach((e) => {
//     const popUpRefLeft = e.querySelector(".popup-slider__prev");
//     const popUpRefRight = e.querySelector(".popup-slider__next");

//     const thumbSlider = e.querySelector(".popup-thumbs");
//     const popupThumbs = new Swiper(thumbSlider, {
//       preloadImages: false,
//       lazy: true,
//       spaceBetween: 10,
//       slidesPerView: 3.5,
//       freeMode: true,
//       watchSlidesVisibility: true,
//       watchSlidesProgress: true,
//     });

//     const slider = e.querySelector(".popup-slider");
//     new Swiper(slider, {
//       preloadImages: false,
//       lazy: true,
//       slidesPerView: 1,
//       navigation: {
//         nextEl: popUpRefRight,
//         prevEl: popUpRefLeft,
//       },
//       thumbs: {
//         swiper: popupThumbs,
//       },
//     });
//   });
// }
