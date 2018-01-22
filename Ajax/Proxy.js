let target = function(){
    return 'target'
};
let handler = {
    apply(target, ctx, args){
        console.log('调用了apply方法');
        return Reflect.apply(...arguments);
    }
};

let proxy = new Proxy(target, handler);
console.log( proxy());