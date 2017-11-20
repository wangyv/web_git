$(function () {
    //input框
    $('#inputsearch').on('focus',function () {
        if(this.value==this.defaultValue){
            this.value='';
        }
    }).on('blur',function () {
        if(this.value==''){
            $(this).val(this.defaultValue);
        }
    });

    //换肤
    var $categories=$('#categories h2');
    var $nav=$('#nav');
    var $sLis=$('#skin li');
    $sLis.on('click',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $nav.css({
            background:$(this).data('color')
        });
        $categories.css({
            background:$(this).data('sort')
        })
    });
});
