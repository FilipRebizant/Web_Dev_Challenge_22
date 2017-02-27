$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('opened');
    });

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        $('header').addClass('sticky');
    }
    else{
        $('header').removeClass('sticky');
    }  
});
        
    


});