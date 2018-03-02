import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-active-class')
@inject(Element)
export class ReActiveClassCustomAttribute {
  private activeClass: string = 'active';

  constructor(
    private element: HTMLElement
  ) {}

  attached() {
    const className = this.element.dataset.active || '';
    if (className.length > 0) {
      this.activeClass = `${className}--active`;
    }
  }

  valueChanged(newValue: boolean = false) {
    if (newValue) {
      this.element.classList.add(this.activeClass);
    } else {
      this.element.classList.remove(this.activeClass);
    }
  }
}
