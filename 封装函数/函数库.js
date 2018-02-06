
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
function getClassName(clsName,context) {
    var context = content||document;
    if(context.getElementsByClassName){
        return context.getElementsByClassName(clsName);
    }else{
        var allList = context.getElementsByTagName('*');
        var aClass = [];
        var reg = new RegExp('\\b' + clsName + '\\b')
        for(var i=0;i<allList.length;i++){
            if (reg.test(allList[i].className) != -1) {
                aClass.push(allList[i]);
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