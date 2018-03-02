var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
var ReActiveClassCustomAttribute = /** @class */ (function () {
    function ReActiveClassCustomAttribute(element) {
        this.element = element;
        this.activeClass = 'active';
    }
    ReActiveClassCustomAttribute.prototype.attached = function () {
        var className = this.element.dataset.active || '';
        if (className.length > 0) {
            this.activeClass = className + "--active";
        }
    };
    ReActiveClassCustomAttribute.prototype.valueChanged = function (newValue) {
        if (newValue === void 0) { newValue = false; }
        if (newValue) {
            this.element.classList.add(this.activeClass);
        }
        else {
            this.element.classList.remove(this.activeClass);
        }
    };
    ReActiveClassCustomAttribute = __decorate([
        customAttribute('re-active-class'),
        inject(Element)
    ], ReActiveClassCustomAttribute);
    return ReActiveClassCustomAttribute;
}());
export { ReActiveClassCustomAttribute };
