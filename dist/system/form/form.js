System.register(["aurelia-templating", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, ReForm;
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
            ReForm = /** @class */ (function () {
                // import { inject } from 'aurelia-dependency-injection';
                // import {TaskQueue} from 'aurelia-task-queue';
                // import {getBooleanFromAttributeValue} from '../common/attributes';
                // import {MdInputUpdateService} from './input-update-service';
                // import {fireEvent} from '../common/events';
                function ReForm() {
                    this.label = '';
                    this.type = 'text';
                    this.disabled = false;
                    this.readonly = false;
                    this.placeholder = '';
                    this.textarea = false;
                    this.hint = '';
                    this.actionHref = '';
                    this.actionLabel = 'action';
                    // @bindable() mdBlurOnEnter = false;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdStep = 'any';
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdValidate = false;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdShowErrortext = true;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdUpdateTrigger = ['input', 'change'];
                    // @bindable() mdValidateError;
                    // @bindable() mdValidateSuccess;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.twoWay
                    // }) mdValue = '';
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdMin = null;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdMax = null;
                    // @bindable({
                    //   defaultBindingMode: bindingMode.oneTime
                    // }) mdName = '';
                    // _suspendUpdate = false;
                    // constructor(
                    //   private element: Element,
                    //   private taskQueue: TaskQueue, updateService) {
                    // this.controlId = `md-input-${MdInput.id++}`;
                    // this.updateService = updateService;
                    // this.blurOnEnter = this.blurOnEnter.bind(this);
                    // }
                    // bind() {
                    //   this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
                    //   this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
                    //   this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
                    //   this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
                    // }
                    // attached() {
                    //   if (getBooleanFromAttributeValue(this.mdValidate)) {
                    //     this.input.classList.add('validate');
                    //   }
                    //   if (this.mdValidateError)  {
                    //     this.label.setAttribute('data-error', this.mdValidateError);
                    //   }
                    //   if (this.mdValidateSuccess)  {
                    //     this.label.setAttribute('data-success', this.mdValidateSuccess);
                    //   }
                    //   if (this.mdPlaceholder) {
                    //     this.input.setAttribute('placeholder', this.mdPlaceholder);
                    //   }
                    //   if (this.mdShowErrortext) {
                    //     this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
                    //   }
                    //   this.updateService.update();
                    //   // special case: time inputs are not covered by Materialize
                    //   if (this.mdType === 'time') {
                    //     $(this.input).siblings('label').addClass('active');
                    //   }
                    //   this.attachEventHandlers();
                    // }
                    // detached() {
                    //   this.detachEventHandlers();
                    // }
                    // blur() {
                    //   fireEvent(this.element, 'blur');
                    // }
                    // focus() {
                    //   this.input.focus();
                    //   fireEvent(this.element, 'focus');
                    // }
                    // mdValueChanged() {
                    //   if (!$(this.input).is(':focus')) {
                    //     this.updateService.update();
                    //   }
                    //   if (this.mdTextArea) {
                    //     $(this.input).trigger('autoresize');
                    //   }
                    // }
                    // attachEventHandlers() {
                    //   if (this.mdBlurOnEnter) {
                    //     this.element.addEventListener('keyup', this.blurOnEnter);
                    //   }
                    // }
                    // detachEventHandlers() {
                    //   if (this.mdBlurOnEnter) {
                    //     this.element.removeEventListener('keyup', this.blurOnEnter);
                    //   }
                    // }
                    // blurOnEnter(e) {
                    //   if (e.keyCode && e.keyCode === 13) {
                    //     this.input.blur();
                    //   }
                    // }
                }
                ReForm.id = 0;
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReForm.prototype, "label", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReForm.prototype, "type", void 0);
                __decorate([
                    aurelia_templating_1.bindable()
                ], ReForm.prototype, "disabled", void 0);
                __decorate([
                    aurelia_templating_1.bindable()
                ], ReForm.prototype, "readonly", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReForm.prototype, "placeholder", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReForm.prototype, "textarea", void 0);
                __decorate([
                    aurelia_templating_1.bindable()
                ], ReForm.prototype, "hint", void 0);
                __decorate([
                    aurelia_templating_1.bindable()
                ], ReForm.prototype, "actionHref", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReForm.prototype, "actionLabel", void 0);
                ReForm = __decorate([
                    aurelia_templating_1.customElement('re-form')
                    // @inject(Element, TaskQueue, MdInputUpdateService)
                ], ReForm);
                return ReForm;
            }());
            exports_1("ReForm", ReForm);
        }
    };
});
