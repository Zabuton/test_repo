$(function() {
  var h = $(window).height();

  $('#wrapper').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#wrap').css('display', 'block');
});

$(document).ready(function(){
    // Slide
    $("#slider").bgswitcher({
        images: ["./images/slider/01.jpg", "./images/slider/02.jpg", "./images/slider/03.jpg"],
        effect: "drop",
        interval: "6000"
    });
    
    // Tab
    $(function() {
        //クリックしたときのファンクションをまとめて指定
        $('#shop_tab li').click(function() {

            //.index()を使いクリックされたタブが何番目かを調べ、
            //indexという変数に代入します。
            var index = $('#shop_tab li').index(this);

            //コンテンツを一度すべて非表示にし、
            $('#shop_content li').css('display','none');

            //クリックされたタブと同じ順番のコンテンツを表示します。
            $('#shop_content li').eq(index).css('display','block');

            //一度タブについているクラスselectを消し、
            $('#shop_tab li').removeClass('tab_selected');

            //クリックされたタブのみにクラスselectをつけます。
            $(this).addClass('tab_selected')
        });
        $('#aboutus h2').on("click", function() {
            // アコーディオン開閉
            $(this).next(".accordion").slideToggle(300);
            // そして90deg回転する矢印
            $(this).children().toggleClass("rotate");
        });
    });
});