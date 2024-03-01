
var swiper = new Swiper(".mySwiper", {
  effect: "slide",
  speed: 4000,
  slidesPerView: 4,
  autoplay: {
    delay: 0, 
    disableOnInteraction: false, 
    stopOnLastSlide: false,
    waitForTransition: false,
  },
  shadow: false,
  parallax: true,
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 50,
    scale: 1,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  zoom: {
    maxRatio: 1.4,
    minRation: 1,
    toggle: true
  }
});