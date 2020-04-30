var observation = 'observation';
var observationVideoOverlay = $('.' + observation + '__video-overlay');


observationVideoOverlay.on('click', function () {
  var that = $(this);
  var dataSrc = that.parent().data('src').toString().trim();

  that.addClass(observation + '__video-overlay--slide-up').siblings('iframe').attr('src', dataSrc);
});


// function runWeatherWidget() {
//   if ($(window).width() >= 768) {
//     if (!$('#weather').length)
//       $('.' + observation + '__weather').append('<div id="weather" class="elfsight-app-2040b944-b856-440e-90be-c49c8c661d26"></div>');
//   } else {
//     if ($('#weather').length) {
//       $('#weather').remove();
//     }
//   }
// }
//
//
// $(document).ready(runWeatherWidget);
// $(window).resize(runWeatherWidget);