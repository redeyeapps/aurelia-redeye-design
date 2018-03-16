"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
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
        aurelia_templating_1.customAttribute('re-form-maxlength'),
        aurelia_dependency_injection_1.inject(Element)
    ], ReFormMaxlengthCustomAttribute);
    return ReFormMaxlengthCustomAttribute;
}());
exports.ReFormMaxlengthCustomAttribute = ReFormMaxlengthCustomAttribute;
