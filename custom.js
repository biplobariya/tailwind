
//Initialize Swiper 
    var swiper = new Swiper(".hero-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
      },
    });


    
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




// Analysis  slider
var swiper = new Swiper(".analysis-blog2", {
  spaceBetween: 30,
  pagination: {
      el: ".categories_slider_pagination",
      clickable: true,
  }
});