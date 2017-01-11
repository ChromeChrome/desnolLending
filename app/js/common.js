$(function () {
    /*
    *   Buton scroll top
    */
    $(window).scroll(function () {

        win = $(window).scrollTop();

        if (win < 500) {
            $(".btn-top").hide();
        } else {
            $(".btn-top").show();
        }
    });

    $(".btn-top a").on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data("href")).offset().top - 159
        }, 500);
    });

    /*
        * Flex slider
    */
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5
    });  
})