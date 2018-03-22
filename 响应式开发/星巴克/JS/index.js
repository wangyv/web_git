$(function(){
    //导航栏
   $('#nav-sub-menu .nav-sub-menu-second ul').hide();
   $('#nav .nav-menu .nav-menu-content').on('click',function () {
       $('.dialog-mask').css({
           opacity:0.5,
           filter: 'alpha(opacity:50)',
           zIndex:11
       });
       var $top = document.body.scrollTop || document.documentElement.scrollTop;
       $('#nav-sub-menu').css({
            top:$top,
            width:270+'px'
       });
    });
    window.onscroll = function(){
        var $scroll = document.body.scrollTop || document.documentElement.scrollTop;
        if($scroll >0 ){
            $('.dialog-mask').css({
                zIndex:-999,
                opacity:0,
                filter: 'alpha(opacity:0)'
            });
            $('#nav-sub-menu').css({
                width:0
            });
        }
    }
    $('.dialog-mask').on('click',function () {
       $('.dialog-mask').css({
           zIndex:-999,
           opacity:0,
           filter: 'alpha(opacity:0)'
       });
       $('#nav-sub-menu').css({
            width:0
       });
    });
   $('#nav-sub-menu .nav-sub-menu-second li').on('click',function () {
        $(this).find('ul').slideToggle();
   }).on('selectstart',function () {
       return false;
   });
   $('#nav-sub-menu .nav-sub-menu-second li a').on('click',function () {
       return false;
   });


   //脚部
    $('#footer .item').on('click',function () {
        if(document.documentElement.clientWidth <= 768){
            $(this).find('.item-content').slideToggle();
        }
        return false;
    });

    var p = 0, t = 0;
    //导航栏
    $(window).on('scroll',function () {
        p = $(this).scrollTop();
        if(p > 100){
            $('#nav .nav-content').add('#nav').add('#nav .nav-content div').add('#nav .nav-logo img').css({
                height:0,
            });
        }else{
            //fixed
            $('#nav .nav-content').add('#nav').add('#nav .nav-content div').css({
                height:'100px',
            });
            $('#nav .nav-logo img').css('height','73px');
        }



        if(t > p && p >100){//上滚
            // $('#nav .nav-content').add('#nav').css({
            //     height:'60px'
            // });
            // $('.nav-menu').css({
            //     height:'53px'
            // });
            // $('.nav-menu img').css({
            //     width:'34px'
            // });
            // $('#nav .nav-menu .nav-menu-content').css({
            //     width:'34px',
            //     height:'41px',
            //     margin:'6px 10px'
            // });
            // $('#nav .nav-logo img').css({
            //     height:'50px',
            //     width:'50px'
            // });
            // $('#nav .nav-logo').css({
            //     padding:'5px 0'
            // })
        }
        setTimeout(function(){t = p;},0);
    });

});