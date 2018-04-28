import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-form-scale')
export class ReFormScale {
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
  }) min = '0';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) max = '100';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) step = '1';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) prefix = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) suffix = '';

  incrementValue() {
    this._incrementValue('asc');
  }

  decrementValue() {
    this._incrementValue('desc');
  }

  private _incrementValue(direction = 'asc') {
    const step = direction === 'asc' ? parseInt(this.step) : -1 * parseInt(this.step)
    const newValue = parseInt(this.value) + step;
    if (newValue > parseInt(this.max)) {
      this.value = this.max;
    } else if (newValue < parseInt(this.min)) {
      this.value = this.min;
    } else {
      this.value = newValue.toString();
    }
  }
}