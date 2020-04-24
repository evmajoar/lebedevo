$('.burger').on('click',function() {

  const that = $(this);
  const targetId = that.data('target-id');
  const targetClassToggle = that.data('target-class-toggle');

  if (targetId && targetClassToggle) {
    that.toggleClass('burger--open');
    $('.' + targetId).toggleClass(targetClassToggle);
  }

} );