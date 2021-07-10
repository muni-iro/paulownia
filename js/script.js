$('.header_humburger').on('click', function(){
    if($(this).hasClass('humburger-toggle')){
        $(this).removeClass('humburger-toggle');
        $('body').css('overflow', 'scroll');
        $('.humburger_menu').css('opacity', '0');
        $('.humburger_menu').css('left', '-100vw');
        $('.header_humburger-frame').removeClass('close');
    } else {
        $(this).addClass('humburger-toggle');
        $('body').css('overflow', 'hidden');
        $('.humburger_menu').css('opacity', '1');
        $('.humburger_menu').css('left', '0');
        $('.header_humburger-frame').addClass('close');
    }
});
$('.nav-list_content a').on('click', function(){
  $('.header_humburger').removeClass('humburger-toggle');
  $('body').css('overflow', 'scroll');
  $('.humburger_menu').css('opacity', '0');
  $('.humburger_menu').css('left', '-100vw');
  $('.header_humburger-frame').removeClass('close');
});


/*-----
- スクロールすると header に is-fixed 
-----*/
$(function(){
  var mvHeight = $('.mv').outerHeight(); //メインビジュアルの高さを取得。これがイベント発火位置になる。
  var header = $('.header_pc'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
    if (0 < mvHeight) {
    //メインビジュアルがあれば（topページなら）
      if ($(window).scrollTop() < mvHeight) {
        //メインビジュアル内にいるとき、クラスを外す。
        header.removeClass('is-fixed');
      }else {
        //メインビジュアルより下までスクロールしたとき、クラスを付ける。
        header.addClass('is-fixed');
      }
    //メインビジュアルがなければ（下層ページなら）
    }else {
      // もともとheaderについているネガティブマージンを0にする
      // header.css("margin","0");
      // ロード時にクラス付与
      header.addClass('on-top');

      $(window).on('load scroll', function(){
        if ($(window).scrollTop() < 100) {
          //topから100px未満の位置にいるとき。
          header.addClass('on-top');
          header.removeClass('is-fixed');
        }else {
          //topから100px以上の位置にいるとき。
          header.removeClass('on-top');
          header.addClass('is-fixed');
        }
      });
    };
  });
});


/*-----
- js-spanize のクラスを付与することで、一文字一文字に対して<span></span>をつける
-----*/
(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          // spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);


/*-----
- サムネイルのクリックで表示を切り替える
-----*/
// $(function(){
  $('.thumbImgF li').on('click',function(){
      var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
      var num = class_name.slice(9); //class名の末尾の数字を取得
      $('.mainImgF li').css("display","none"); //メインの画像を全て隠す
      $('.mainImgF' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
  });
// });
// $(function(){
  $('.thumbImgD li').on('click',function(){
      var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
      var num = class_name.slice(9); //class名の末尾の数字を取得
      $('.mainImgD li').css("display","none"); //メインの画像を全て隠す
      $('.mainImgD' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
  });
// });
// $(function(){
  $('.thumbImgA li').on('click',function(){
      var class_name = $(this).attr("class"); //クリックしたサムネイルのclass名を取得
      var num = class_name.slice(9); //class名の末尾の数字を取得
      $('.mainImgA li').css("display","none"); //メインの画像を全て隠す
      // $('.mainImgA li').hide(); //メインの画像を全て隠す
      $('.mainImgA' + num).fadeIn(); //クリックしたサムネイルに対応するメイン画像を表示
      // $('.mainImgA' + num).fadeIn().css("display","list-item"); //クリックしたサムネイルに対応するメイン画像を表示
  });
// });


/*-----
- fadeInUpTrigger のクラス部分が画面に入ったらfadeIn というクラス名がHTMLに付与される。
-----*/
$('.fadeInUpTrigger').on('inview', function(event, isInView) {
  if (isInView) {//表示領域に入った時
    $(this).addClass('fadeInUp');//クラス名が付与
  } else {//表示領域から出た時
    // $(this).removeClass('fadeInUp');//クラス名が除去
  }
});

$('.fadeInSlideTrigger').on('inview', function(event, isInView) {
  if (isInView) {//表示領域に入った時
    $(this).addClass('fadeInSlide');//クラス名が付与
    // $('.js-spanize > span').addClass('parapara');//クラス名が付与

  } else {//表示領域から出た時
    // $(this).removeClass('fadeInSlide');//クラス名が除去
    // $('.js-spanize > span').removeClass('parapara');//クラス名が除去
  }
});


/*-----
- スムーズスクロール部分の記述
-----*/
$(function() {
  // スクロールのオフセット値
  var offsetY = -15;
  // var offsetY = -150;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href*="#"]').on('click',function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});


/*-----
- slick
-----*/
$('.view-slide').slick({
  // autoplay:true,
  arrows: false,
  centerMode: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  slidesToShow: 1
});
/*-----
通常、centerModeをしていすると、両側にダミーが表示されるが、cssで

.slick-list {
    padding: 0 18% 0 0!important;
}

と指定することで右だけにダミーが表示される。
jsで centerPadding: '18%', を指定すると両側表示になってしまう？
-----*/