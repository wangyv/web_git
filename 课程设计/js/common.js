$(function () {
    var $author = $('#author');
    var $authorContainer = $('.authorContainer',$author);
    $author.hover(function () {
        $authorContainer.show(500);
        // $('.iconfont',$author).hide();
    },function () {
        $authorContainer.hide(500,function () {
            $('.iconfont',$author).show();
        });
    });
});