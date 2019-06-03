import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject, TaskQueue } from 'aurelia-framework';
import { dispatchEvent } from '../../events';

@customElement('re-form-text')
@inject(Element, TaskQueue)
export class ReFormText {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) label = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) name = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) placeholder = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) disabled = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) readonly = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) inline = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) hint = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) actionHref = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) actionLabel = '';

  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) value = '';

  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) maxlength = '';

  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) type: null | string = 'text';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) pattern: RegExp | null = null;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) patternError: string = '';

  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) validated: null | boolean = null;

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) validateOnKeyup: null | boolean = null;

  @bindable({
    defaulltBindingMode: bindingMode.oneTime
  }) focusOnAttach: null | boolean = null;

  private inputElement: null | HTMLInputElement = null;
  private _regex: RegExp = /./;
  private errorMessage: string = '';

  constructor(
    private element: HTMLElement,
    private taskQueue: TaskQueue
  ) {}

  typeChanged(n: string) {
    this._resetRegex(n);
  }

  patternChanged() {
    this._resetRegex();
  }

  attached() {
    if (this.focusOnAttach) {
      this.taskQueue.queueMicroTask(() => {
        if (this.inputElement !== null) {
          this.inputElement.focus();
        }
      });
    }
    this._validate();
  }

  private _resetRegex(newType?: string) {
    if (this.pattern) {
      this._regex = this.pattern;
      this.errorMessage = this.patternError || '';
      return;
    }
    const type = newType || this.type;
    switch (type) {
      case 'email':
        // tslint:disable-next-line:max-line-length
        this._regex = /^(([^<>\[\]\\.,;:\s@"]+(\.[^<>\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.errorMessage = 'Please enter a correct email address';
        break;
      case 'phone':
        // tslint:disable-next-line:max-line-length
        this._regex = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
        this.errorMessage = 'Please enter a correct phone number';
        break;
      default:
        this._regex = /./;
        this.errorMessage = '';
        break;
    }
  }

  handleFocus() {
    // Dispatch a focus event that bubbles
    dispatchEvent(this.element, 'focus');
  }

  handleBlur() {
    this._validate();
    // Dispatch a blur event that bubbles
    dispatchEvent(this.element, 'blur');
  }

  handleKeyup() {
    if (this.validateOnKeyup) {
      this._validate();
    }
  }

  private _validate() {
    if (!this.value) this.value = '';
    if (this.value.length) {
      this.validated = this._regex.test(this.value);
      this.hint = !this.validated && this.errorMessage || '';
    } else {
      this.validated = null;
      this.hint = '';
    }
  }

  get isError() {
    if (this.validated === null) return false;
    return !this.validated;
  }

  get isSuccess() {
    return this.validated;
  }
}
