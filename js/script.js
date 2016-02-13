
// DOMが読み込まれたら
$(function() {

  /* 画像の拡大表示 */
  $(".fancybox").fancybox({
    helpers: {
      title : {
        type : 'inside'
      },
      overlay: {
        css: { 'background': 'rgba(102, 128, 136, 0.2)' }
      }
    }
  });
});