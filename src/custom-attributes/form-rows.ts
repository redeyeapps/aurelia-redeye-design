import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-form-rows')
@inject(Element)
export class ReFormRowsCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: string | null = null) {
    if (newValue) {
      this.element.setAttribute('rows', newValue);
    } else {
      this.element.removeAttribute('rows');
    }
  }
}
