// https://codepen.io/BoyWithSilverWings/pen/MJgQqR?editors=0010

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(".main-nav-trigger").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();

    $("body").toggleClass("mob-menu");
    
    if ($("body").hasClass("mob-menu")) {
        $(this).html("close").removeClass("ico-menu").addClass("ico-close");
        } else {
            $(this).html("menu").addClass("ico-menu").removeClass("ico-close");
        }
});

$(".main-nav").on("click", function(e) {
    e.stopPropagation();
});

$(document).on("click", function(event){
        if (!$(event.target).hasClass('.main-nav')) {
            $("body").removeClass("mob-menu");
            $(".main-nav-trigger").html("menu").addClass("ico-menu").removeClass("ico-close");
        }
    });
  
$(window).on('resize scroll', function() {
    if (!$(".main-top-bar").isInViewport()) { 
      $("body").addClass('menu-bot-pos');
    } else {
      $("body").removeClass('menu-bot-pos');
    }
});