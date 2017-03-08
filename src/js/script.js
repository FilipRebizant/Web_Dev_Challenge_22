$(document).ready(function () {
    "use strict";
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('opened');

        if ($('nav').hasClass('opened')) {
            $('header').toggleClass('max-height');
        } else {
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

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });




});