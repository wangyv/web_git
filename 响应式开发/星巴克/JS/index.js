$(function(){
    //导航栏
   $('#nav-sub-menu .nav-sub-menu-second ul').hide();
   $('#nav .nav-menu .nav-menu-content').on('click',function () {
       $('.dialog-mask').css({
           opacity:0.5,
           filter: 'alpha(opacity:50)',
           zIndex:1
       });
       $('#nav-sub-menu').css({
               width:270+'px'
       });
   });
    $('.dialog-mask').on('click',function () {
       $('.dialog-mask').css({
           zIndex:-1,
           opacity:0,
           filter: 'alpha(opacity:0)'
       });
        $('#nav-sub-menu').css({
            width:0
        });
    });
   $('#nav-sub-menu .nav-sub-menu-second li').on('click',function () {
      $(this).find('ul').slideToggle();
   });
});