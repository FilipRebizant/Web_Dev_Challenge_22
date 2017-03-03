$(document).ready(function () {
    $('.burger').click(function () {
            $(this).toggleClass('active');
            $('nav').toggleClass('opened');

        if($('nav').hasClass('opened')){
            $('header').toggleClass('max-height');
        }
        else{ 
            setTimeout(function () {
                $('header').toggleClass('max-height');
            }, 300);
        }

    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });




});