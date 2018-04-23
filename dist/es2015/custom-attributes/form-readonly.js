var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
var ReFormReadonlyCustomAttribute = /** @class */ (function () {
    function ReFormReadonlyCustomAttribute(element) {
        this.element = element;
    }
    ReFormReadonlyCustomAttribute.prototype.valueChanged = function (newValue) {
        if (newValue === void 0) { newValue = false; }
        if (newValue && newValue !== 'false') {
            this.element.setAttribute('readonly', '');
        }
        else {
            this.element.removeAttribute('readonly');
        }
    };
    ReFormReadonlyCustomAttribute = __decorate([
        customAttribute('re-form-readonly'),
        inject(Element)
    ], ReFormReadonlyCustomAttribute);
    return ReFormReadonlyCustomAttribute;
}());
export { ReFormReadonlyCustomAttribute };
