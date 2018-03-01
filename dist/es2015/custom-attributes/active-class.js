var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
var ActiveClassCustomAttribute = /** @class */ (function () {
    function ActiveClassCustomAttribute(element) {
        this.element = element;
    }
    ActiveClassCustomAttribute.prototype.valueChanged = function (newValue) {
        if (newValue) {
            this.element.classList.add('active');
        }
        else {
            this.element.classList.remove('active');
        }
    };
    ActiveClassCustomAttribute = __decorate([
        customAttribute('active-class'),
        inject(Element)
    ], ActiveClassCustomAttribute);
    return ActiveClassCustomAttribute;
}());
export { ActiveClassCustomAttribute };
