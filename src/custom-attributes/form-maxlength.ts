import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-form-maxlength')
@inject(Element)
export class ReFormMaxlengthCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: string | null = null) {
    if (newValue) {
      this.element.setAttribute('maxlength', newValue);
    } else {
      this.element.removeAttribute('maxlength');
    }
  }
}
