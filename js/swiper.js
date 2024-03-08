var swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  speed: 5000,
   preventInteractionOnTransition: true,
  autoplay: {
    delay: 0, 
  },
  
  spaceBetween: 50,
  //centeredSlides: true, 
  grabCursor: false,
});
