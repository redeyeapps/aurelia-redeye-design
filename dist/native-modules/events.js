export function dispatchEvent(element, evtName, detail) {
    if (detail === void 0) { detail = {}; }
    var evt = new CustomEvent(evtName, {
        bubbles: true,
        detail: detail
    });
    element.dispatchEvent(evt);
}
