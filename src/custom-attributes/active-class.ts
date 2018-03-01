import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('active-class')
@inject(Element)
export class ActiveClassCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: boolean) {
    if (newValue) {
      this.element.classList.add('active');
    } else {
      this.element.classList.remove('active');
    }
  }
}
