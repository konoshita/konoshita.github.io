$(function () {
  $(".openbtn").on('click', function () { //ボタンがクリックされたら
    $(this).toggleClass('batsu'); //ボタン自身に batsuクラスを付与し
    $("#HBG_nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
  });
  $("#HBG_nav a").on('click', function () { //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('batsu'); //ボタンの batsuクラスを除去し
    $("#HBG_nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
  });

  //tabの切り替え
  $('#contents ul[id != "all"]').hide();
  $(".tab_btn").click(function () {
    $("#contents ul").hide(); //一度すべての.contets divを非表示にする
    $($(this).attr("href")).show(); //clickメソッドで選択されているコンテンツを再表示する
    $(".current").removeClass("current"); //現在の.currentから、クラスcurrentを削除する
    $(this).addClass("current"); //現在クリックされているタブの該当要素に、クラスcurrentを付与する
    return false; //クリックイベント停止
  });

  //worksの下層ページ用スライダーリンク
  $('.slider').slick({
	centerMode: true,
    centerPadding: '5%',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
});
