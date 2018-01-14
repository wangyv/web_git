
//深拷贝问题
function clone(obj) {
    var newObj = {};
    for(var p in obj){
        if(typeof(obj[p])=='object'){
            newObj[p] = clone(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
    return newObj;
}