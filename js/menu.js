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
            console.log("blkah"); 
        }
    });