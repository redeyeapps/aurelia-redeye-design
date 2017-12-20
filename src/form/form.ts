import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
// import { inject } from 'aurelia-dependency-injection';
// import {TaskQueue} from 'aurelia-task-queue';
// import {getBooleanFromAttributeValue} from '../common/attributes';
// import {MdInputUpdateService} from './input-update-service';
// import {fireEvent} from '../common/events';

@customElement('re-form')
// @inject(Element, TaskQueue, MdInputUpdateService)
export class ReForm {
  static id = 0;

  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) label = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) type = 'text';
  @bindable() disabled = false;
  @bindable() readonly = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) placeholder = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) textarea = false;
  @bindable() hint = '';
  @bindable() actionHref = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) actionLabel = 'action';

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