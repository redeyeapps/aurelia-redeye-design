System.register(["aurelia-templating", "aurelia-dependency-injection"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_dependency_injection_1, ReFormMinCustomAttribute, ReFormMaxCustomAttribute, ReFormStepCustomAttribute;
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
            ReFormMinCustomAttribute = /** @class */ (function () {
                function ReFormMinCustomAttribute(element) {
                    this.element = element;
                }
                ReFormMinCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = null; }
                    if (newValue) {
                        this.element.setAttribute('min', newValue);
                    }
                    else {
                        this.element.removeAttribute('min');
                    }
                };
                ReFormMinCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-form-min'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReFormMinCustomAttribute);
                return ReFormMinCustomAttribute;
            }());
            exports_1("ReFormMinCustomAttribute", ReFormMinCustomAttribute);
            ReFormMaxCustomAttribute = /** @class */ (function () {
                function ReFormMaxCustomAttribute(element) {
                    this.element = element;
                }
                ReFormMaxCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = null; }
                    if (newValue) {
                        this.element.setAttribute('max', newValue);
                    }
                    else {
                        this.element.removeAttribute('max');
                    }
                };
                ReFormMaxCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-form-max'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReFormMaxCustomAttribute);
                return ReFormMaxCustomAttribute;
            }());
            exports_1("ReFormMaxCustomAttribute", ReFormMaxCustomAttribute);
            ReFormStepCustomAttribute = /** @class */ (function () {
                function ReFormStepCustomAttribute(element) {
                    this.element = element;
                }
                ReFormStepCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = null; }
                    if (newValue) {
                        this.element.setAttribute('step', newValue);
                    }
                    else {
                        this.element.removeAttribute('step');
                    }
                };
                ReFormStepCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-form-step'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReFormStepCustomAttribute);
                return ReFormStepCustomAttribute;
            }());
            exports_1("ReFormStepCustomAttribute", ReFormStepCustomAttribute);
        }
    };
});
