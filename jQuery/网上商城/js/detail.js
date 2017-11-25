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

    //点击小图切不同颜色图片
    var $colorChange=$('#pro-detail .color-change');
    var $magnifierA=$magnifier.find('a');
    var $bigPicture=$('#big-picture');
    $colorChange.find('li').on('click',function () {
        //切换右侧颜色图片及标题
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).children('img').addClass('selected');
        $(this).siblings().children('img').removeClass('selected');
        $colorChange.find('.color').text($(this).children('img').attr('alt'));

        //切换大图
        var href= 'images/pro_img/'+$(this).find('img').data('name')+'_one_big.jpg';
        var src='images/pro_img/'+$(this).find('img').data('name')+'_one_small.jpg';
        $magnifierA.add($bigPicture).prop('href',href);
        $bigImgImg.prop('src',href);
        $magnifier.find('img').prop('src',src);

        //小图随右侧选择切换
        $imgListLi.removeClass('selected');
        for(var i=0;i<$imgListLi.length;i++){
            if($imgListLi.eq(i).attr('class').indexOf($(this).find('img').data('name'))==0){
                $imgListLi.eq(i).addClass('selected');
            }
        }
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

    //尺寸改变
    var $sizeChange=$('#pro-detail .size-change');
    $sizeChange.find('li').on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $sizeChange.find('.size').text($(this).text());
    });

    //总价改变
    var $numOption=$('#pro-detail .num-change select'),
        $sum=$('#pro-detail .sum-price .sum');
    $numOption.on('click',function () {
        $sum.text($(this).val()*$sum.data('price'));
    });


    //评分
    var $ratingUl=$('#pro-rating ul'),
        $ratingA=$('#pro-rating li a');
    $ratingA.hover(function () {
        $ratingUl.addClass($(this).parent().attr('class')+'-hover');
    },function () {
        $ratingUl.removeClass($(this).parent().attr('class')+'-hover');
    }).on('click',function () {
        $ratingUl.removeClass().addClass($(this).parent().attr('class')+'-selected');
        alert('您给这件商品的评分是：'+this.title);
        return false;
    });


});