
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
function getClassName(clsName,content) {
    var content = content||document;
    if(content.getElementsByClassName){
        return content.getElementsByClassName(clsName);
    }else{
        var allList = content.getElementsByTagName('*');
        var aClass = [];
        for(var i=0;i<allList.length;i++){
            if (allList[i].className.indexOf(clsName) != -1) {
                result.push(allList[i]);
            }
        }
        return aClass;
    }
}


// 3、获取到elem的下一个兄弟元素节点
function next(elem) {
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}

//4、获取到elem的第一个孩子元素

function firstChildren(elem) {
    elem = elem.firstChildren();
    return elem.nodeType ==1?elem:next(elem);
}