import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customAttribute('re-form-min')
@inject(Element)
export class ReFormMinCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: string | null = null) {
    if (newValue) {
      this.element.setAttribute('min', newValue);
    } else {
      this.element.removeAttribute('min');
    }
  }
}

@customAttribute('re-form-max')
@inject(Element)
export class ReFormMaxCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: string | null = null) {
    if (newValue) {
      this.element.setAttribute('max', newValue);
    } else {
      this.element.removeAttribute('max');
    }
  }
}

@customAttribute('re-form-step')
@inject(Element)
export class ReFormStepCustomAttribute {
  constructor(
    private element: HTMLElement
  ) {}

  valueChanged(newValue: string | null = null) {
    if (newValue) {
      this.element.setAttribute('step', newValue);
    } else {
      this.element.removeAttribute('step');
    }
  }
}
