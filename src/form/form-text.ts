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

  @bindable() maxlength = '';
}