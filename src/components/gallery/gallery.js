var gallery = new Swiper( '.gallery__list-wrapper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 20,
  lazy: true,
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '"><span>' + (index + 1) + '</span></li>';
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }
} );