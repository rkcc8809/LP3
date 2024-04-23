"use strict";

$(window).on('load',function(){
$("#loading-text").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
$("#loading").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

//=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
$('.loading-animation').on('animationend', function() { 
//この中に動かしたいJSを記載
});
//=====ここまで背景が伸びた後に動かしたいJSをまとめる

});




// $(function () {
//   let w = window.innerWidth || $(window).width();
//   if (w > 769) {
// } else {
//   $("header .drawer").click(function(){
//   $('body').toggleClass('nav-open');
//   $('header .header-wrap__nav').fadeToggle(200);
//     });
//   $("header-wrap__nav__list__item__txt").click(function(){
//   $('body').toggleClass('nav-open');
//   $('header .header-wrap__nav').fadeToggle(200);
//     });
//   }
// });
$(function () {
  let w = window.innerWidth || $(window).width();
  if (w <= 768) {
    $("header .drawer").click(function(){
      $('body').toggleClass('nav-open');
      $('header .header-wrap__nav').fadeToggle(200);
    });

    // メニュー項目をクリックしたときにメニューを閉じる
    $(".header-wrap__nav__list__item__txt").click(function(){
      if ($('body').hasClass('nav-open')) {
        $('body').removeClass('nav-open');
        $('header .header-wrap__nav').fadeOut(200);
      }
    });
  }
});




// $(window).on('scroll', function() {
//   $('.ser-wrap__body__block__img__pic, .ser-wrap__body__block__img__con').each(function() {
//     var elemPos = $(this).offset().top;
//     var windowHeight = $(window).height();
//     var scrollTop = $(window).scrollTop();

//     if (scrollTop + windowHeight > elemPos) {
//       $(this).addClass('rotate-on-scroll');
//     }
//   });
// });
$(window).on('scroll', function() {
  $('.vis-wrap__left, .vis-wrap__right, .ser-wrap__body__block__img__pic, .ser-wrap__body__block__img__con').each(function() {
    var elemPos = $(this).offset().top; // 要素の上部位置
    var elemHeight = $(this).outerHeight(); // 要素の高さ
    var windowHeight = $(window).height(); // ウィンドウの高さ
    var scrollTop = $(window).scrollTop(); // 現在のスクロール位置

    // 要素がビューポート内に入った時
    if (scrollTop + windowHeight > elemPos && scrollTop < elemPos + elemHeight) {
      $(this).addClass('rotate-on-scroll');
    } else {
      // 要素がビューポートから完全に出た時
      $(this).removeClass('rotate-on-scroll');
    }
  });
});


$(window).on('scroll', function() {
  $('.vis-wrap__right').each(function() {
    var elemPos = $(this).offset().top; // 要素の上部位置
    var elemHeight = $(this).outerHeight(); // 要素の高さ
    var windowHeight = $(window).height(); // ウィンドウの高さ
    var scrollTop = $(window).scrollTop(); // 現在のスクロール位置

    // 要素がビューポート内に入った時
    if (scrollTop + windowHeight > elemPos && scrollTop < elemPos + elemHeight) {
      $(this).addClass('rotate-on-scroll__slow');
    } else {
      // 要素がビューポートから完全に出た時
      $(this).removeClass('rotate-on-scroll__slow');
    }
  });
});




// function fadeIn() {
//   // フェードアップ
//   $('.fadeUpTrigger').each(function () {  // fadeUpTriggerクラスの各要素に対して
//     let scroll = $(window).scrollTop();  // スクロール位置を取得する
//     let triTop = $(this).offset().top + 100;  // 要素の上部より100px下の位置を取得
//     let winHeight = $(window).height();  // ウィンドウの高さを取得
//     if (scroll >= triTop - winHeight) {  // 画面内に要素が入ったかを判断
//       $(this).addClass('fadeUp');  // fadeUpクラスを付与
//     } else {
//       $(this).removeClass('fadeUp');  // fadeUpクラスを削除
//     }
//   });
// }

// function fadeIn() {
//   $('.fadeUpTrigger').each(function () {
//     let scroll = $(window).scrollTop();
//     let triTop = $(this).offset().top + 100;
//     let winHeight = $(window).height();
//     if (scroll >= triTop - winHeight && !$(this).hasClass('animated')) {
//       $(this).addClass('fadeUp animated');
//     }
//   });
// }

// $(document).ready(function() {
//   fadeIn();  // ページロード時に実行
//   $(window).scroll(fadeIn);  // スクロール時に実行
// });

function fadeIn() {
  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;  // 要素の上部より100px下の位置
    let triBottom = $(this).offset().top + $(this).outerHeight(); // 要素の下部の位置
    let winHeight = $(window).height();

    // 要素がビューポート内に入った場合
    if (scroll + winHeight > triTop && scroll < triBottom) {
      if (!$(this).hasClass('animated')) { // まだアニメーションされていない場合
        $(this).addClass('fadeUp animated'); // アニメーションクラスを追加
      }
    } else { // 要素がビューポート外に出た場合
      if ($(this).hasClass('animated')) { // アニメーションされている場合
        $(this).removeClass('fadeUp animated'); // アニメーションクラスを削除
      }
    }
  });
}

$(document).ready(function() {
  fadeIn();  // ページロード時に実行
  $(window).scroll(fadeIn);  // スクロール時に実行
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

// 動きは期待通り
// $(document).ready(function() {
//     $('.faq-wrap__body__list__item__tog').on('change', function() {
//         var currentId = this.id;
//         $('.faq-wrap__body__list__item__tog').each(function() {
//             if (this.id !== currentId) {
//                 $(this).prop('checked', false);
//                 $(this).next().next('.faq-wrap__body__list__item__con').css({
//                     "transform": "scaleY(0)",  // 明示的に閉じる
//                     "max-height": "0"          // 高さを0に設定
//                 });
//             }
//         });
//     });
// });

// 閉じる動作がNG
// $(document).ready(function() {
//     $('.faq-wrap__body__list__item__tog').on('change', function() {
//         var currentId = this.id;
//         var $currentCheckbox = $('#' + currentId);
//         var $currentContent = $currentCheckbox.next().next('.faq-wrap__body__list__item__con');

//         // 他のチェックボックスを閉じる
//         $('.faq-wrap__body__list__item__tog').each(function() {
//             if (this.id !== currentId) {
//                 $(this).prop('checked', false);
//                 $(this).next().next('.faq-wrap__body__list__item__con').css({
//                     "transition": "transform 0.3s ease-out, max-height 0.3s ease-out",
//                     "transform": "scaleY(0)",
//                     "max-height": "0"
//                 });
//             }
//         });

//         // 現在のチェックボックスの状態に基づいて開くまたは閉じる
//         if ($currentCheckbox.prop('checked')) {
//             $currentContent.css({
//                 "transition": "transform 0.6s ease, max-height 0.6s ease",
//                 "transform": "scaleY(1)",
//                 "max-height": "60px"  // この高さは内容に応じて調整
//             });
//         } else {
//             $currentContent.css({
//                 "transition": "transform 0.6s ease-out, max-height 0.6s ease-out",
//                 "transform": "scaleY(0)",
//                 "max-height": "0"
//             });
//         }
//     });
// });

// 要素が瞬間的
// $(document).ready(function() {
//     $('.faq-wrap__body__list__item__tog').on('change', function() {
//         var currentId = this.id;
//         var $currentCheckbox = $('#' + currentId);
//         var $currentContent = $currentCheckbox.next().next('.faq-wrap__body__list__item__con');

//         $('.faq-wrap__body__list__item__tog').each(function() {
//             if (this.id !== currentId) {
//                 $(this).prop('checked', false);
//                 $(this).next().next('.faq-wrap__body__list__item__con').css({
//                     "max-height": "0"
//                 });
//             }
//         });

//         if ($currentCheckbox.prop('checked')) {
//             $currentContent.css({
//                 "max-height": "60px"  // 適宜調整
//             });
//         } else {
//             $currentContent.css({
//                 "max-height": "0"
//             });
//         }
//     });
// });

// $(document).ready(function() {
//     $('.faq-wrap__body__list__item__tog').on('change', function() {
//         var currentId = this.id;
//         var $currentCheckbox = $('#' + currentId);
//         var $currentContent = $currentCheckbox.next().next('.faq-wrap__body__list__item__con');

//         $('.faq-wrap__body__list__item__tog').each(function() {
//             if (this.id !== currentId) {
//                 $(this).prop('checked', false);
//                 $(this).next().next('.faq-wrap__body__list__item__con').css({
//                     "max-height": "0",
//                     "opacity": "0"
//                 });
//             }
//         });

//         if ($currentCheckbox.prop('checked')) {
//             $currentContent.css({
//                 "max-height": "60px", // コンテンツのサイズに応じて調整
//                 "opacity": "1"
//             });
//         } else {
//             $currentContent.css({
//                 "max-height": "0",
//                 "opacity": "0"
//             });
//         }
//     });
// });
