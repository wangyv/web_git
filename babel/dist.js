'use strict';

var target = function target() {
    return 'target';
};
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('调用了apply方法');
        return Reflect.apply.apply(Reflect, arguments);
    }
};

var proxy = new Proxy(target, handler);
console.log(proxy());
