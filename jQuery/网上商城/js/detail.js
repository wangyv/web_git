$(function () {
   //放大镜
    var $drag=$('#proitm #drag'),$bigImg=$('#big-img'),$magnifier=$('#magnifier');
    var $img=$('#img'),$proitm=$('#proitm');
    $magnifier.on ('mouseenter',function () {
        $drag.add($bigImg).css('display','block');
    });
    $magnifier.on ('mouseleave',function () {
        $drag.add($bigImg).css('display','none');
    });
    $magnifier.on ('mousemove',function (e) {
        e=e||window.event;
        var left=e.clientX-($drag.width()/2)-$proitm.offset().left;
        var top=e.clientY-($drag.height()/2)-$proitm.offset().top;
        if(left<0){
            left=0;
        }
        if(top<0){
            top=0;
        }
        var maxX=$(this).width()-$drag.width();
        var maxY=$(this).height()-$drag.height();
        if(left>maxX){
            left=maxX;
        }
        if(top>maxY){
            top=maxY;
        }
        $drag.css({
            left:left,
            top:top
        });
        var ratioX=left/maxX;
        var ratioY=top/maxY;
        var imgRatioX=-ratioX*($img.width()-$bigImg.width());
        var imgRatioY=-ratioY*($img.height()-$bigImg.height());
        $img.css({
            left:imgRatioX,
            top:imgRatioY
        })
    });



});