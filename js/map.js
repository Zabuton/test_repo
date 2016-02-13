/* ECCOM GoogleMapsControllsVer1.2 */

var directionsDisplay;

// 配列を初期化
var noshiro = {lat: 35.115775, lng: 136.647193},
    objects = {},
    markers = {},
    listout = {history:'',station:'',bathroom:'',gourmet:'',lives:'',view:''},
    iconimages = {history:'./js/icon/1.png',station:'./js/icon/2.png',bathroom:'./js/icon/3.png',gourmet:'./js/icon/4.png',lives:'./js/icon/5.png',view:'./js/icon/6.png'};

// リストの要素をHTMLで返す関数
function outputlist(key) {
    var rtn = '<a class="geo" id="' + key + '">';
    rtn += '<span class="shop_name">' + datas[key].name + '</span>';
    rtn += '（' + datas[key].cat + '）<br>' + datas[key].addr + '</a>';
    return rtn;
}

function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 18,
            center: noshiro,
            draggable: true,
            scrollwheel: true,
            disableDefaultUI: false,
            disableDoubleClickZoom: true
        });
    
    // datas配列のマーカーをすべて描画
    // datas配列をメニューでカテゴリ毎にリスト表示
    for (key in datas) {
        // まずはマーカーを描画
        objects[key] = new google.maps.LatLng({lat: datas[key].lat, lng: datas[key].lng});
        markers[key] = new google.maps.Marker({position: objects[key], map: map, icon: iconimages[datas[key].cid[0]]});
        // そしてカテゴリ毎に整理
        if(0<=jQuery.inArray('history',datas[key].cid))
            listout.history += outputlist(key);
        if(0<=jQuery.inArray('station',datas[key].cid))
            listout.station += outputlist(key);
        if(0<=jQuery.inArray('bathroom',datas[key].cid))
            listout.bathroom += outputlist(key);
        if(0<=jQuery.inArray('gourmet',datas[key].cid))
            listout.gourmet += outputlist(key);
        if(0<=jQuery.inArray('lives',datas[key].cid))
            listout.lives += outputlist(key);
        if(0<=jQuery.inArray('view',datas[key].cid))
            listout.view += outputlist(key);
    }
    // リスト表示をOUTPUT
    $('#history').html(listout.history);
    $('#station').html(listout.station);
    $('#bathroom').html(listout.bathroom);
    $('#gourmet').html(listout.gourmet);
    $('#lives').html(listout.lives);
    $('#view').html(listout.view);
    
    // 選択すると詳細カードが表示される
    $('.geo').click(function () {
        id = $(this).attr('id'); // 識別名を取得
        cat= $(this).parents().attr('id'); // カテゴリを取得
        disp = '<div class="spot_' + cat + ' clearfloat">';
        disp+= '<img src="' + datas[id].img + '" width="160" class="card_img"><div class="card_body">';
        disp+= '<p class="spot_h"><span class="spot_name">■' + datas[id].name + '</span>(' + datas[id].cat + ')</p><p>' + datas[id].addr;
        if(datas[id].tel)
            disp+= '<br>TEL: ' + datas[id].tel;
        if(datas[id].time)
            disp+= '<br>営業時間: ' + datas[id].time;
        if(datas[id].closed)
            disp+= '<br>お休み: ' + datas[id].closed;
        if(datas[id].park)
            disp+= '<br>駐車場: ' + datas[id].park;
        disp+= '</p></div>';
        if(datas[id].url)
            disp+= '<p class="toblog"><a href="' + datas[id].url + '" target="_blank">ブログを読む<span></span></a></p>';
        disp+= '</div>';

        map.panTo(objects[id]);
        markers[id].setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () { markers[id].setAnimation(null); }, 2800);
        // カード表示
        $('#top_shop_card').fadeIn();
        $('#top_shop_card').html(disp);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);