System.register(["aurelia-templating", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, ReFormText;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            ReFormText = /** @class */ (function () {
                function ReFormText() {
                    this.label = '';
                    this.name = '';
                    this.placeholder = '';
                    this.disabled = false;
                    this.readonly = false;
                    this.inline = false;
                    this.hint = '';
                    this.actionHref = '';
                    this.actionLabel = '';
                    this.value = '';
                    this.maxlength = '';
                    this.type = 'text';
                    this.pattern = null;
                    this.patternError = '';
                    this.validated = null;
                    this._regex = /./;
                    this.errorMessage = '';
                }
                ReFormText.prototype.typeChanged = function (n) {
                    this._resetRegex(n);
                };
                ReFormText.prototype.patternChanged = function () {
                    this._resetRegex();
                };
                ReFormText.prototype.attached = function () {
                    this._validate();
                };
                ReFormText.prototype._resetRegex = function (newType) {
                    if (this.pattern) {
                        this._regex = this.pattern;
                        this.errorMessage = this.patternError || '';
                        return;
                    }
                    var type = newType || this.type;
                    switch (type) {
                        case 'email':
                            this._regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            this.errorMessage = 'Please enter a correct email address';
                            break;
                        case 'phone':
                            this._regex = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
                            this.errorMessage = 'Please enter a correct phone number';
                            break;
                        default:
                            this._regex = /./;
                            this.errorMessage = '';
                            break;
                    }
                };
                ReFormText.prototype.handleBlur = function () {
                    this._validate();
                };
                ReFormText.prototype._validate = function () {
                    if (!this.value)
                        this.value = '';
                    if (this.value.length) {
                        this.validated = this._regex.test(this.value);
                        this.hint = !this.validated && this.errorMessage || '';
                    }
                    else {
                        this.validated = null;
                        this.hint = '';
                    }
                };
                Object.defineProperty(ReFormText.prototype, "isError", {
                    get: function () {
                        if (this.validated === null)
                            return false;
                        return !this.validated;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReFormText.prototype, "isSuccess", {
                    get: function () {
                        return this.validated;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "label", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "name", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "placeholder", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "disabled", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "readonly", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "inline", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "hint", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "actionHref", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "actionLabel", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
                    })
                ], ReFormText.prototype, "value", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "maxlength", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormText.prototype, "type", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "pattern", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormText.prototype, "patternError", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
                    })
                ], ReFormText.prototype, "validated", void 0);
                ReFormText = __decorate([
                    aurelia_templating_1.customElement('re-form-text')
                ], ReFormText);
                return ReFormText;
            }());
            exports_1("ReFormText", ReFormText);
        }
    };
});
