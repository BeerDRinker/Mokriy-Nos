/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*jslint vars: true, devel: true*/
/*global $, jQuery, alert*/

/* ***** Google Map API ***** */

var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {

        center: {

            lat: -34.397,
            lng: 150.644
        },
        scrollwheel: false,
        zoom: 8
    });
}


$(window).ready(function () {
    'use strict';

    if ($(window).width() < 760) {

        $('#phoneNavbar').css('display', 'none');

    }
});


$(window).scroll(function () {
    'use strict';

    var sticky = $('#myNavbar'),
        top = $('#top'),
        phones = $('#phoneNavbar'),
        scroll = $(window).scrollTop();

    if (scroll > 358) {

        sticky.addClass('fixed');
        top.addClass('hero-fixed-padding');
        phones.css('display', 'block');

    } else {

        sticky.removeClass('fixed');
        top.removeClass('hero-fixed-padding');
        phones.css('display', 'none');

    }
});
