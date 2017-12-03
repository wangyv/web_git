// requirejs.config({
//    path:{
//        jquery:'jquery-3.2.1'
//    }
// });
require(['jquery','dialog'],function ($,Dialog) {
    $('#button').on('click', function(){
        var settings={
            width:500,
            height:400,
            title:'登录',
            content:'dialog.html'
        };
        var d1 = new Dialog();
        d1.open(settings);
    });
});