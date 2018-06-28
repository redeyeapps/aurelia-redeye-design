System.register(["aurelia-templating", "aurelia-dependency-injection"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_dependency_injection_1, ReErrorClassCustomAttribute, ReSuccessClassCustomAttribute;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }
        ],
        execute: function () {
            ReErrorClassCustomAttribute = /** @class */ (function () {
                function ReErrorClassCustomAttribute(element) {
                    this.element = element;
                    this.errorClass = 'error';
                }
                ReErrorClassCustomAttribute.prototype.attached = function () {
                    var className = this.element.dataset.error || '';
                    if (className.length > 0) {
                        this.errorClass = className + "--error";
                    }
                };
                ReErrorClassCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = false; }
                    if (newValue) {
                        this.element.classList.add(this.errorClass);
                    }
                    else {
                        this.element.classList.remove(this.errorClass);
                    }
                };
                ReErrorClassCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-error-class'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReErrorClassCustomAttribute);
                return ReErrorClassCustomAttribute;
            }());
            exports_1("ReErrorClassCustomAttribute", ReErrorClassCustomAttribute);
            ReSuccessClassCustomAttribute = /** @class */ (function () {
                function ReSuccessClassCustomAttribute(element) {
                    this.element = element;
                    this.successClass = 'success';
                }
                ReSuccessClassCustomAttribute.prototype.attached = function () {
                    var className = this.element.dataset.success || '';
                    if (className.length > 0) {
                        this.successClass = className + "--success";
                    }
                };
                ReSuccessClassCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = false; }
                    if (newValue) {
                        this.element.classList.add(this.successClass);
                    }
                    else {
                        this.element.classList.remove(this.successClass);
                    }
                };
                ReSuccessClassCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-success-class'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReSuccessClassCustomAttribute);
                return ReSuccessClassCustomAttribute;
            }());
            exports_1("ReSuccessClassCustomAttribute", ReSuccessClassCustomAttribute);
        }
    };
});
