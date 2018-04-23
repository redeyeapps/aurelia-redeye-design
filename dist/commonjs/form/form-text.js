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
var ReFormText = /** @class */ (function () {
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
    }
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
        aurelia_templating_1.bindable()
    ], ReFormText.prototype, "maxlength", void 0);
    ReFormText = __decorate([
        aurelia_templating_1.customElement('re-form-text')
    ], ReFormText);
    return ReFormText;
}());
exports.ReFormText = ReFormText;
