import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-form-disabled')
@inject(Element)
export class ReFormDisabledCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: boolean | string = false) {
    if (newValue && newValue !== 'false') {
      this.element.setAttribute('disabled', '');
    } else {
      this.element.removeAttribute('disabled');
    }
  }
}
