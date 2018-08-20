System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }
    exports_1("debounce", debounce);
    return {
        setters: [],
        execute: function () {
        }
    };
});
