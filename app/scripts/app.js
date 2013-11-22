/*global define */
define(['jquery'], function ($) {
    'use strict';

    var documentHeight,
        windowHeight,
        scrollPercent;

    $([document, window]).on('ready resize', function () {
        documentHeight = $(document).height();
        windowHeight = $(window).height();
    });

    $(document).on('scroll', function () {
        scrollPercent = Math.floor($(document).scrollTop() / (documentHeight - windowHeight) * 100);
    });

    return '\'Allo \'Allo!';
});