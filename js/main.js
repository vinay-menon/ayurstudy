// https://codepen.io/BoyWithSilverWings/pen/MJgQqR?editors=0010


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.info-box').each(function() {
    if ($(this).isInViewport()) { 
      $(this).addClass('slide-in');
    } else {
      $(this).removeClass('slide-in');
    }
  });
});