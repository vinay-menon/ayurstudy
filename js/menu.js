$(".main-nav-trigger").on("click", function(e){
    e.preventDefault();

    $("body").toggleClass("mob-menu");
    
    if ($("body").hasClass("mob-menu")) {
        $(this).html("close").removeClass("ico-menu").addClass("ico-close");
        } else {
            $(this).html("menu").addClass("ico-menu").removeClass("ico-close");
        }
})