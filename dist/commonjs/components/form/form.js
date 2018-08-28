"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var ReForm = /** @class */ (function () {
    function ReForm() {
        this.type = 'text';
        this.textarea = false;
        this.label = '';
        this.placeholder = '';
        this.disabled = false;
        this.readonly = false;
        this.hint = '';
        this.actionHref = '';
        this.actionLabel = 'action';
        this.value = '';
        this.min = '';
        this.max = '';
        this.step = '';
        this.maxlength = '';
    }
    ReForm.id = 0;
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReForm.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReForm.prototype, "textarea", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReForm.prototype, "label", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReForm.prototype, "placeholder", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReForm.prototype, "hint", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReForm.prototype, "actionHref", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReForm.prototype, "actionLabel", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
        })
    ], ReForm.prototype, "value", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "min", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "max", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "step", void 0);
    __decorate([
        aurelia_templating_1.bindable()
    ], ReForm.prototype, "maxlength", void 0);
    ReForm = __decorate([
        aurelia_templating_1.customElement('re-form')
    ], ReForm);
    return ReForm;
}());
exports.ReForm = ReForm;
