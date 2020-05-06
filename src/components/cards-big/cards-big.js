$('.cards-big__tab').on('click', function() {
  var that = $(this);
  var targetId = that.data('target-id').toString().trim();

  that
    .addClass('is-current')
    .siblings()
    .removeClass('is-current')
    .closest('.cards-big')
    .find('div[data-name=' + targetId + '], td[data-name=' + targetId + ']')
    .addClass('is-active')
    .siblings()
    .removeClass('is-active');


  var cardThumbs = new Swiper(that.closest('.cards-big').find('.cards-big__gallery-container[data-name=' + targetId + '] .cards-big__thumbs-wrapper'), {
    spaceBetween: 7,
    slidesPerView: 3,
    freeMode: true,
    lazy: {
      loadPrevNext: true,
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var cardGallery = new Swiper(that.closest('.cards-big').find('.cards-big__gallery-container[data-name=' + targetId + '] .cards-big__gallery-wrapper'), {
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

});

$('a[data-id="print"]').on('click', function (e) {
  e.preventDefault();

  var parent = $(this).closest('.cards-big')[0];

  function printCard() {
    printHTML(parent.innerHTML);
  }


  function printHTML(html) {
    var frame = document.createElement('iframe');
    frame.style.cssText = 'border:none;position:fixed;left:100%;';
    frame.onload = function() {
      var cssText = 'body{display:none} ' +
        '@media print {' +
          'body{' +
            'display:block' +
          '} ' +
          '.cards-big__gallery-container, ' +
          '.cards-big__links, ' +
          '.cards-big__buttons {' +
            'display:none' +
          '}' +
        '}';
      var style = this.contentDocument.createElement('style');
      if (style.readyState == 'loading') {
        style.onreadystatechange = function() {
          alert(this.readyState);
          if (this.readyState = 'complete') {
            this.sheet.cssText = cssText;
          }
        }
      } else {
        style.textContent = cssText;
      }
      this.contentDocument.getElementsByTagName('head')[0].appendChild(style);
      this.contentDocument.body.innerHTML = html;
      this.contentWindow.print();
      setTimeout(function(){
        frame.parentNode.removeChild(frame);
      }, 0);
    }
    document.body.appendChild(frame);
  }

  printCard()

});