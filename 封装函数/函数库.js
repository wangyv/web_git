
//  1、深拷贝问题
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


//  2、实现通过元素class名查找
function getClassName(className,content) {
    var content = content||document;
    if(content.getElementsByClassName){
        return content.getElementsByClassName(className);
    }else{
        var allList = content.getElementsByTagName('*');
        var aClass = [];
        for(var i=0;i<allList.length;i++){
            if(allList[i].className == className){
                aClass.push(allList[i]);
            }
        }
        return aClass;
    }
}