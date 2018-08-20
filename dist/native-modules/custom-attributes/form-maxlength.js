var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
var ReFormMaxlengthCustomAttribute = /** @class */ (function () {
    function ReFormMaxlengthCustomAttribute(element) {
        this.element = element;
    }
    ReFormMaxlengthCustomAttribute.prototype.valueChanged = function (newValue) {
        if (newValue === void 0) { newValue = null; }
        if (newValue) {
            this.element.setAttribute('maxlength', newValue);
        }
        else {
            this.element.removeAttribute('maxlength');
        }
    };
    ReFormMaxlengthCustomAttribute = __decorate([
        customAttribute('re-form-maxlength'),
        inject(Element)
    ], ReFormMaxlengthCustomAttribute);
    return ReFormMaxlengthCustomAttribute;
}());
export { ReFormMaxlengthCustomAttribute };
