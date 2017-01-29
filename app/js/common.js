$(function () {
    /*
     * Counter
     */
    window.onscroll = function () {
        Counter()
    };
    var flag = true;

    function Counter() {
        if (document.body.scrollTop > 4606) {
            while (flag) {
                $('.counter-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'linear',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                flag = false;
            }
        }
    }

    /*
     * animate class
     */
    /*    setTimeout(function(){
        $(".get-mob-app .flex-next, .get-mob-app .flex-prev").addClass("animated infinite fast pulse");
    },1000)*/

    /*
     * Buton scroll top
     */
    $(window).scrollTop(function () {

        var win = $(window).scrollTop();
        if (win < 500) {
            $(".btn-top").hide();
        } else {
            $(".btn-top").show();
        }

    });

    /*
     * arrow-top
     */
    $(".btn-top a").on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data("href")).offset().top - 159
        }, 500);
    });

    /*
     * Flexslider
     */
    $('.slider-1').flexslider({
        animation: "fade",
        animationLoop: true,
        itemMax: 1,
        controlNav: false,
        slideshowSpeed: 3000,
        animationSpeed: 600,
        prevText: "",
        nextText: ""
    });

    $('.slider-2').flexslider({
        animation: "slide",
        animationLoop: true,
        itemMax: 1,
        controlNav: true,
        prevText: "",
        nextText: ""
    });

    /*
     * input mask librari
     */
    $("input[name='phoneInPopup'], input[name='phoneGuest']").inputmask("+7 (999) 999 99 99", {
        alias: 'phonebe',
        //clearMaskOnLostFocus: false,
        onBeforeMask: function (value, opts) {
            var processedValue = value.replace(/^0/g, "");
            if (processedValue.indexOf(" ") > 1 || processedValue.indexOf(" ") == -1) {
                processedValue = " " + processedValue;
            }
            return processedValue;
        }
    });

    /*
     * Opening a popup for 1 minute
     */
    setTimeout(function () {
        $("#free-consultation").modal('show')
    }, 60000);
    /*
     * Feedback form
     */
    function feedbackSend(formSend, nameField, emailField, phoneField, messageFields) {
        $(formSend).submit(function (event) {
            event.preventDefault();
            var arrField = [$(nameField), $(emailField), $(phoneField), $(messageFields)],
                cntNotNull = 0;

            $.each(arrField, function (i, e) {
                if ($(e).val() != null && $(e).val() != "" && $(e).val() != undefined) {
                    cntNotNull++;
                }
                console.log(e.val());
            })
            console.log(cntNotNull);
            if (cntNotNull >= 4) {
                var dataSend = $(formSend).serialize();

                $.post("feedback.php", {
                        "data": dataSend
                    },
                    function (data) {
                        console.log(data);
                        setTimeout(
                            function () {
                                $(".free-consultation--close").trigger("click");
                                $(formSend).trigger('reset');
                            }, 2000
                        );
                    })
            }
            return false;
        });
    }

    feedbackSend(
        ".block-form__form>form", "input[name='nameGuest']",
        "input[name='emailGuest']", "input[name='phoneGuest']",
        "textarea[name='msgTask']"
    );
    feedbackSend(
        ".free-consultation__items>form", "input[name='nameInPopup']",
        "input[name='emailInPopup']", "input[name='phoneInPopup']",
        "textarea[name='msgInPopup']"
    );
})