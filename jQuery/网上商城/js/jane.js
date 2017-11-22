$(function () {
   //轮播图
    var $imgs=$('#imager img');
    var $lbtAs=$('#imager .img-nav a');
    var lbtIdx=0;
    $lbtAs.on('mouseenter',function () {
        lbtIdx=$(this).index();
        $(this).add($imgs.eq($(this).index())).addClass('selected').siblings().removeClass('selected');
    });//滑动切图
    var timer;
    function lbtPlay() {
        timer=setInterval(function () {
            if(lbtIdx==$imgs.length){
                lbtIdx=-1;
            }
            $lbtAs.eq(++lbtIdx).add($imgs.eq(lbtIdx)).addClass('selected').siblings().removeClass('selected');
        },2000)
    }
    function lbtPause() {
        clearInterval(timer);
    }
    lbtPlay();
    $imgs.hover(function () {
        lbtPause();
    },function () {
        lbtPlay();
    });

    //热门商品选项卡
    var $brandList=$('#brandlist');
    var $brandContent=$('#brandcontent');
    $('#brandtab li').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $brandList.css({
            left:-($brandContent.width()*$(this).index())
        })
    });

    //划入提示框
    var sDivs=[];
    var sInner=[];
    var $nLis=$('#notice li');
    var $noticeInfo=$('#notice');
    for(var i=0;i<$nLis.length;i++){
        sInner.push($nLis.children('a').eq(i).text());
    }
    for(var i=0;i<$nLis.length;i++){
        sDivs.push("<div class='pop-up-box'>"+sInner[i]+"</div>");
    }
    var x=10;
    var y=20;
    $nLis.hover(function (e) {
        e=e||window.event();
        $nLis.eq($(this).index()).append(sDivs[$(this).index()]).show('fast');
        $(this).children('div').css({
            display:'block',
            left:e.pageX+x,
            top:e.pageY+y
        });
        },function () {
            $(this).children('div').remove();
        });
    $nLis.on('mousemove',function (e) {
        e=e||window.event();
        $(this).children('div').css({
            left:e.pageX+x+'px',
            top:e.pageY+y+'px'
        })
    });

});