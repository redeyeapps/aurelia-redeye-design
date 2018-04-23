import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-form-readonly')
@inject(Element)
export class ReFormReadonlyCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: boolean | string = false) {
    if (newValue && newValue !== 'false') {
      this.element.setAttribute('readonly', '');
    } else {
      this.element.removeAttribute('readonly');
    }
  }
}
