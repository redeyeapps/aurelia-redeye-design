import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-error-class')
@inject(Element)
export class ReErrorClassCustomAttribute {
  private errorClass: string = 'error';

  constructor(
    private element: HTMLElement
  ) {}

  attached() {
    const className = this.element.dataset.error || '';
    if (className.length > 0) {
      this.errorClass = `${className}--error`;
    }
  }

  valueChanged(newValue: boolean = false) {
    if (newValue) {
      this.element.classList.add(this.errorClass);
    } else {
      this.element.classList.remove(this.errorClass);
    }
  }
}

@customAttribute('re-success-class')
@inject(Element)
export class ReSuccessClassCustomAttribute {
  private successClass: string = 'success';

  constructor(
    private element: HTMLElement
  ) {}

  attached() {
    const className = this.element.dataset.success || '';
    if (className.length > 0) {
      this.successClass = `${className}--success`;
    }
  }

  valueChanged(newValue: boolean = false) {
    if (newValue) {
      this.element.classList.add(this.successClass);
    } else {
      this.element.classList.remove(this.successClass);
    }
  }
}
