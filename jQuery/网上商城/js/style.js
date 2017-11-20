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

    
});
