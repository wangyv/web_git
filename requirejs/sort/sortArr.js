define(['isArray'],function (isArray) {
    function sortArr(arr) {
        if(isArray(arr)){
            return arr.sort(function (a,b) {
                return a-b;
            });
        }else{
            var a='您输入的不是一个数组';
            console.log(a);
        }
    }
    return sortArr;
});