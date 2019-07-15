$(function () {
    'use strict';
    //adjust Slider Height
    var winh = $(window).height(),
        upperh = $('.upper_bar').innerHeight(),
        navh = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winh - (upperh + navh));


    // shuffle_images
    $('.features_work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle_images .col-md-3').css('opacity', 1);
        } else {
            $('.shuffle_images .col-md-3').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });



});