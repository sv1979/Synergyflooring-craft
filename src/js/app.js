window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');

require('bootstrap');
import Swiper from 'swiper';
import AOS from 'aos';
import mixitup from 'mixitup';
import 'aos/dist/aos.css';

function navScroll() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 30) {
        $('header').addClass('scroll');
        $('.mobile-header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
        $('.mobile-header').removeClass('scroll');
    }
}

AOS.init({
    duration: 600,
});

$(document).ready(function () {
    navScroll()
});

$(window).scroll(function () {
    navScroll()
});

$(function () {
    $('.nav-icon').click(function () {
        $('body').toggleClass('show-nav');
        navScroll();
        $(this).toggleClass('active');
        if ($('body').hasClass('show-nav')) {
            $('.mobile-header').addClass('scroll');
        }
    });

    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() >= 1180) {
            $('body').removeClass('show-nav');
        }
    });
});

$(document).ready(function () {

    var accordion_head = $('.accordion > li > a'),
        accordion_body = $('.accordion li > .sub-menu, .last-sub-menu');

    // Click function
    accordion_head.on('click', function (event) {

        // Disable header links
        event.preventDefault();

        // Show and hide the tabs on click
        if ($(this).attr('class') != 'active') {
            accordion_body.slideUp('normal');
            $(this).next().stop(true, true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        } else {
            accordion_body.slideUp('normal');
            accordion_head.removeClass('active');
        }
    });

});

$(document).ready(function () {

    $(window).on('load', function () {
        $(".video-thumbnail iframe").hide();
    });

    $(".play").on('click', function (event) {
        $(this).fadeOut();
        $(".video-thumbnail .thumbnail").fadeOut(500);
        $(".video-thumbnail iframe").delay(400).fadeIn(300);
        $(".video-thumbnail iframe")[0].src += "&autoplay=1";
        event.preventDefault();
    });

    if($('.filter-container').length) {
        var mixer = mixitup('.filter-container');
    }
});