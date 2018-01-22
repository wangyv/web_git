$(function () {
    //input框
    $('#inputsearch').on('focus',function () {
        if(this.value==this.defaultValue){
            this.value='';
        }
    }).on('blur',function () {
        if(this.value==''){
            this.value=this.defaultValue;
        }
    });
    //划入导航栏，弹出子菜单
    $('#nav li').hover(function () {
       $(this).children('.subitem') .css('display','block');
    },function () {
        $(this).children('.subitem') .css('display','none');
    });
    //换肤
    $(function () {
        // var $skin=$('#skin li');
        var skin=$.cookie('skin');
        if(skin){
            changeSkin(skin);
        }
        $('#skin li').on('click',function () {
            skin=this.id;
            $.cookie('skin',skin,{expires:30});
            changeSkin(skin);
        });
        function changeSkin() {
            $('#'+skin).addClass('selected').siblings().removeClass('selected');
            $('#skin-change').attr('href','CSS/skin/'+ skin +'.css');
        }

    });
});
