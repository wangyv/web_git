function addEvent(elem,type,handler) {
    if(elem.addEventListener){
        elem.addEventListener(type,handler,false);
    }else if(elem.attachEvent){
        elem.ae=function () {
            handler.call(elem);
        };
        elem.attachEvent('on'+type,elem.ae);
    }else{
        elem['on'+type]=handler;
    }
}