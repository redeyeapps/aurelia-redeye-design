define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function dispatchEvent(element, evtName, detail) {
        if (detail === void 0) { detail = {}; }
        var evt = new CustomEvent(evtName, {
            bubbles: true,
            detail: detail
        });
        element.dispatchEvent(evt);
    }
    exports.dispatchEvent = dispatchEvent;
});
