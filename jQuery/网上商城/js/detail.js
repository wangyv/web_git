$(function () {
   //放大镜
    var $drag=$('#pro-itm #drag'),$bigImg=$('#big-img'),$magnifier=$('#magnifier');
    var $img=$('#img'),$proitm=$('#pro-itm');
    $magnifier.on ('mouseenter',function () {
        $drag.add($bigImg).css('display','block');
    });
    $magnifier.on ('mouseleave',function () {
        $drag.add($bigImg).css('display','none');
    });
    $magnifier.on ('mousemove',function (e) {
        e=e||window.event;
        var left=e.pageX-($drag.width()/2)-$proitm.offset().left;
        var top=e.pageY-($drag.height()/2)-$proitm.offset().top;
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

    //选项卡
    var $tabLi=$('#tab .tab-menu li'),$tabDiv=$('#tab .tab-box div');
    $tabLi.on('click',function () {
        $(this).add($tabDiv.eq($(this).index())).addClass('selected').siblings().removeClass('selected');
    });



    //点击小图切图片
    var $imgListLi=$('#img-list li'),$bigImgImg=$bigImg.children('img');

    $imgListLi.on('click',function () {
        var $selectedColor=$('#pro-detail .color-change li.selected').find('img').data('name');
        var href = 'images/pro_img/'+$selectedColor+'_'+$(this).find('img').attr('alt')+'_big.jpg';
        var src='images/pro_img/'+$selectedColor+'_'+$(this).find('img').attr('alt')+'_small.jpg';
        $magnifierA.add($bigPicture).attr('href',href);
        $bigImgImg.prop('src',href);
        $magnifier.find('img').prop('src',src);
    });


});