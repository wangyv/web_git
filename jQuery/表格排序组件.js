function sort(table,thidx,sortTypes) {//传入一个JQ对象，下标，排序类型
    var $tbody = $('tbody', table);
    var arr=[];
    $('th',table).eq(thidx).on('click',function () {
        var sortType=$(this).data('sorttype');
        var sort=sortTypes;
        var idx=$(this).index();
        $('tr',$tbody).each(function () {
            arr.push(this);
        });
        arr.sort(function(a,b){
            var aHtml=a.children[idx].innerHTML;
            var bHtml=b.children[idx].innerHTML;
            if(sortType=='number'){
                return sort=="asc"?aHtml-bHtml:bHtml-aHtml;
            }else{
                return sort=="asc"?aHtml.localeCompare(bHtml):bHtml.localeCompare(aHtml);
            }
        });
        $(this).data('sort',$(this).data('sort')=='asc'?'desc':'asc');
        $tbody.empty();
        for(var i=0;i<arr.length;i++){
            $('tbody').append(arr[i]);
        }
    });
    console.log(111);
}