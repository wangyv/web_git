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

    

});