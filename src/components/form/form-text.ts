import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form-text')
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

  private _regex: RegExp = /./;
  private errorMessage: string = '';

  typeChanged(n: string) {
    this._resetRegex(n);
  }

  patternChanged() {
    this._resetRegex();
  }

  attached() {
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
      this._regex = /^(([^<>\[\]\\.,;:\s@"]+(\.[^<>\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  }

  handleBlur() {
    this._validate();
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
