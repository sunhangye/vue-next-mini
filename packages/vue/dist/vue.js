var Vue = (function (exports) {
    'use strict';

    var mutableHandlers = {};

    /**
     * 响应式Map响应对象
     * key: target
     * value: proxy ?
     */
    var reactiveMap = new WeakMap();
    /**
     * 为复杂类型创建响应式对象
     * @param target
     */
    function reactive(target) {
        return createReactiveObject(target, mutableHandlers, reactiveMap);
    }
    function createReactiveObject(target, baseHandler, proxyMap) {
        var exitingProxy = proxyMap.get(target);
        if (exitingProxy) {
            return exitingProxy;
        }
        var proxy = new Proxy(target, baseHandler);
        proxy["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */] = true;
        proxyMap.set(target, proxy);
        return proxy;
    }

    exports.reactive = reactive;

    return exports;

})({});
//# sourceMappingURL=vue.js.map
