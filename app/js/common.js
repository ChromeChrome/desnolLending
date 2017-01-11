$(function(){
     $(window).scroll(function () {
        
        win = $(window).scrollTop();
        
        if (win < 500) {
            $(".btn-top").hide();
        }
        else {
            $(".btn-top").show();
        }
    });

    $(".btn-top a").on('click',function(){
		 $('html, body').animate({
          scrollTop: $($(this).data("href")).offset().top-159
      }, 500);
	});
})