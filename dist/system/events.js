System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function dispatchEvent(element, evtName, detail) {
        if (detail === void 0) { detail = {}; }
        var evt = new CustomEvent(evtName, {
            bubbles: true,
            detail: detail
        });
        element.dispatchEvent(evt);
    }
    exports_1("dispatchEvent", dispatchEvent);
    return {
        setters: [],
        execute: function () {
        }
    };
});
