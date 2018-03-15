import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form-radio')
export class ReFormRadio {
  static id = 0;
  // private input: HTMLElement | null = null;
  
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) label = '';
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
    defaultBindingMode: bindingMode.twoWay
  }) value = '';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) options = [];
}
