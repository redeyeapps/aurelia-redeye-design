var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-binding"], function (require, exports, aurelia_templating_1, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReFormTextarea = /** @class */ (function () {
        function ReFormTextarea() {
            this.label = '';
            this.name = '';
            this.placeholder = '';
            this.disabled = false;
            this.readonly = false;
            this.inline = false;
            this.hint = '';
            this.value = '';
            this.rows = '';
        }
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormTextarea.prototype, "label", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormTextarea.prototype, "name", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormTextarea.prototype, "placeholder", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormTextarea.prototype, "disabled", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormTextarea.prototype, "readonly", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormTextarea.prototype, "inline", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormTextarea.prototype, "hint", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
            })
        ], ReFormTextarea.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable()
        ], ReFormTextarea.prototype, "rows", void 0);
        ReFormTextarea = __decorate([
            aurelia_templating_1.customElement('re-form-textarea')
        ], ReFormTextarea);
        return ReFormTextarea;
    }());
    exports.ReFormTextarea = ReFormTextarea;
});
