import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form')
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
}