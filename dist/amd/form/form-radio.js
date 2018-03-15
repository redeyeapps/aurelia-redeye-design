var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-binding"], function (require, exports, aurelia_templating_1, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReFormRadio = /** @class */ (function () {
        function ReFormRadio() {
            // private input: HTMLElement | null = null;
            this.label = '';
            this.disabled = false;
            this.readonly = false;
            this.inline = false;
            this.hint = '';
            this.value = '';
            this.options = [];
        }
        ReFormRadio.id = 0;
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormRadio.prototype, "label", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormRadio.prototype, "disabled", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormRadio.prototype, "readonly", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormRadio.prototype, "inline", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormRadio.prototype, "hint", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
            })
        ], ReFormRadio.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormRadio.prototype, "options", void 0);
        ReFormRadio = __decorate([
            aurelia_templating_1.customElement('re-form-radio')
        ], ReFormRadio);
        return ReFormRadio;
    }());
    exports.ReFormRadio = ReFormRadio;
});
