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
    
    $('a[href="#"], button').click(function(e){
        e.preventDefault();
    });
(function(){
    
    var currentSlide = 1;
    var slides =  $('.trusted_list').find('.trusted_item');
    console.log(slides);
    if(currentSlide === $slides.length){
        $('#trusted_arrow_right').addClass('inactive');
//        return false;
    }
    else{
        
        $('#trusted_arrow_right').click(function(){
            $('.trusted_list').animate({
                'left': '-=200px'
            });
            currentSlide++;
        });

        $('#trusted_arrow_left').click(function(){
            $('.trusted_list').animate({
                'left': '+=200px'
            });
        });
    }
    
});


});