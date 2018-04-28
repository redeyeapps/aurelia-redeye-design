import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form-number')
export class ReFormNumber {
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
    defaultBindingMode: bindingMode.twoWay
  }) value = '';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) min = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) max = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) step = '';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) prefix = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) suffix = '';
}