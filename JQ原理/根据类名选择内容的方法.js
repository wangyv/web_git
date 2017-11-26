function  classNameSelector(selector,context) {//selecter 是classname ，context 是 上下文。
    context=context||document;
    if(context.getElementsByClassName){
        return context.getElementsByClassName(selector);
    }else{
        var allList=context.getElementsByTagName('*');
        var result=[];
        for(var i=0;i<allList.length;i++){
            if(allList[i].className.indexOf(selector)!=-1){
                result.push(allList[i]);
            }
        }
        return result;
    }
}