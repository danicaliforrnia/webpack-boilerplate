import $ from "jquery";

$(window).on('load', () => {

    const preloader = $('.spinner-wrapper');
    setTimeout(function () {
        preloader.fadeOut(500);
        $('header').fadeIn(1000);
        $('main').fadeIn(1000);
        $('footer').fadeIn(1000);
        $('#curve').fadeIn(1000);
        $('.corner-ribbon').fadeIn(1000);
    }, 500);
});
