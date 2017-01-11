$(function () {
    /*
        * Buton scroll top
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

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemMax:1,
        controlNav:false,
        prevText:"",
        nextText:" "
    }); 

     function feedbackSend( formSend, nameField, emailField, phoneField, messageFields ){
        $(formSend).submit(function (event) {
            event.preventDefault();

            var arrField    = [$(nameField), $(emailField), $(phoneField), $(messageFields)],
                cntNotNull  = 0;

            $.each( arrField, function( i , e ){
                if( $(e).val() != null && $(e).val() != "" && $(e).val() != undefined ){
                    cntNotNull++;
                }
                console.log( e.val() );
            })
            console.log(cntNotNull);
            if ( cntNotNull >= 4 ){ 
                var dataSend = $(formSend).serialize();

                $.post("feedback.php", {
                    data:{
                        "dataSend":dataSend
                    }
                },
                function (data) {
                    console.log(data);
                    //$(nameModal).modal('hide');
                    setTimeout(
                        function(){
                            $("#thank").modal('hide');
                            $("#thankSpecial").modal('hide');
                            $(formSend).trigger('reset');
                        }, 2000
                    );
                })
            }
            return false;
        });
    }

    feedbackSend(
        ".block-form__form>form","input[name='nameGuest']",
        "input[name='emailGuest']", "input[name='phoneGuest']",
        "input[name='msgTask']"
    );
})