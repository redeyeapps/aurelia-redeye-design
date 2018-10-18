var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { TaskQueue, inject } from 'aurelia-framework';
var ReFormTextarea = /** @class */ (function () {
    function ReFormTextarea(taskQueue) {
        this.taskQueue = taskQueue;
        this.label = '';
        this.name = '';
        this.placeholder = '';
        this.disabled = false;
        this.readonly = false;
        this.inline = false;
        this.hint = '';
        this.value = '';
        this.rows = '';
        this.focusOnAttach = null;
        this.inputElement = null;
    }
    ReFormTextarea.prototype.attached = function () {
        var _this = this;
        if (this.focusOnAttach) {
            this.taskQueue.queueMicroTask(function () {
                if (_this.inputElement !== null) {
                    _this.inputElement.focus();
                }
            });
        }
    };
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormTextarea.prototype, "label", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormTextarea.prototype, "name", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormTextarea.prototype, "placeholder", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormTextarea.prototype, "disabled", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormTextarea.prototype, "readonly", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormTextarea.prototype, "inline", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormTextarea.prototype, "hint", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.twoWay
        })
    ], ReFormTextarea.prototype, "value", void 0);
    __decorate([
        bindable()
    ], ReFormTextarea.prototype, "rows", void 0);
    __decorate([
        bindable({
            defaulltBindingMode: bindingMode.oneTime
        })
    ], ReFormTextarea.prototype, "focusOnAttach", void 0);
    ReFormTextarea = __decorate([
        customElement('re-form-textarea'),
        inject(TaskQueue)
    ], ReFormTextarea);
    return ReFormTextarea;
}());
export { ReFormTextarea };
