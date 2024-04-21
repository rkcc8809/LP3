"use strict";


$(function () {
  let w = window.innerWidth || $(window).width();
  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item__txt").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
});

$(document).ready(function() {
    $('.faq-wrap__body__list__item__tog').on('change', function() {
        // 他のすべてのチェックボックスを取得し、現在のチェックボックス以外を未選択にする
        var currentId = this.id; // 現在のチェックボックスのIDを取得
        $('.faq-wrap__body__list__item__tog').each(function() {
            if (this.id !== currentId) {
                $(this).prop('checked', false);
            }
        });
    });
});

