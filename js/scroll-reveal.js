$(window).on('resize scroll', function() {
  $('.info-box').each(function() {
    if ($(this).isInViewport()) { 
      $(this).addClass('slide-in');
    } /*else {
      $(this).removeClass('slide-in');
    }*/
  });
});