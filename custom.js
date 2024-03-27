

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  cssMode: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
    disabledClass: "swiper-button-disabled"
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    575: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    },
  },
  mousewheel: true,
  keyboard: true,
});