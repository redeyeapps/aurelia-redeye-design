var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-binding"], function (require, exports, aurelia_templating_1, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReFormScale = /** @class */ (function () {
        function ReFormScale() {
            this.label = '';
            this.name = '';
            this.placeholder = '';
            this.disabled = false;
            this.readonly = false;
            this.inline = false;
            this.hint = '';
            this.value = '';
            this.min = '0';
            this.max = '100';
            this.step = '1';
            this.prefix = '';
            this.suffix = '';
        }
        ReFormScale.prototype.incrementValue = function () {
            this._incrementValue('asc');
        };
        ReFormScale.prototype.decrementValue = function () {
            this._incrementValue('desc');
        };
        ReFormScale.prototype._incrementValue = function (direction) {
            if (direction === void 0) { direction = 'asc'; }
            var step = direction === 'asc' ? parseInt(this.step) : -1 * parseInt(this.step);
            var newValue = parseInt(this.value) + step;
            if (newValue > parseInt(this.max)) {
                this.value = this.max;
            }
            else if (newValue < parseInt(this.min)) {
                this.value = this.min;
            }
            else {
                this.value = newValue.toString();
            }
        };
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormScale.prototype, "label", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormScale.prototype, "name", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
            })
        ], ReFormScale.prototype, "placeholder", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "disabled", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "readonly", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "inline", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "hint", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
            })
        ], ReFormScale.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "min", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "max", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "step", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "prefix", void 0);
        __decorate([
            aurelia_templating_1.bindable({
                defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
            })
        ], ReFormScale.prototype, "suffix", void 0);
        ReFormScale = __decorate([
            aurelia_templating_1.customElement('re-form-scale')
        ], ReFormScale);
        return ReFormScale;
    }());
    exports.ReFormScale = ReFormScale;
});
