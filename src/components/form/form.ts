import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form')
export class ReForm {
  static id = 0;
  // private input: HTMLElement | null = null;
  
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) type = 'text';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) textarea = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) label = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) placeholder = '';
  @bindable() disabled = false;
  @bindable() readonly = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) hint = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) actionHref = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) actionLabel = 'action';
  
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) value = '';

  @bindable() min = '';
  @bindable() max = '';
  @bindable() step = '';
  @bindable() maxlength = '';
}