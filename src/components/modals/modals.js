var modals = $('.modals');

function openModal(el) {
  var name = el.data('name').toString().trim();

  $('body')
    .addClass('hidden')
    .find(modals)
    .addClass('modals--open')
    .find('.modal--' + name)
    .addClass('modal--open')
    .siblings()
    .removeClass('modal--open');

  if(el.hasClass('js-modal-h')) {
    var cardThumbs = new Swiper(modals.find('.modal--' + name + ' .cards-big__gallery-container--karkas .cards-big__thumbs-wrapper'), {
      spaceBetween: 7,
      slidesPerView: 3,
      freeMode: true,
      lazy: {
        loadPrevNext: true,
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var cardGallery = new Swiper(modals.find('.modal--' + name + ' .cards-big__gallery-container--karkas .cards-big__gallery-wrapper'), {
      spaceBetween: 7,
      slidesPerView: 1,
      lazy: {
        loadPrevNext: true,
      },
      thumbs: {
        swiper: cardThumbs
      },
      pagination: {
        el: '.cards-big__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<li class="' + className + '"><span>' + (index + 1) + '</span></li>';
        }
      },
    });
  }
}


$('.js-modal, .js-modal-h').on('click', function (e) {
  if($(this).is('a')) {
    e.preventDefault();
  }
  openModal($(this));
});


$('.modal__close').on('click', function () {
  $('body').removeClass('hidden');
  $(this)
    .parent()
    .removeClass('modal--open')
    .parent()
    .removeClass('modals--open');
});


$('.modals .overlay').on('click', function () {
  $('.modal__close').trigger( "click" );
});


$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $('.modal__close').trigger( "click" );
  }
});
