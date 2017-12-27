import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

import { dispatchEvent } from '../../events';

@customElement('re-spreadsheet-heading')
@inject(Element)
export class ReSpreadsheetHeading {
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) column = {
    key: '',
    dir: ''
  };

  constructor(
    private element: HTMLElement
  ) {}

  click(evt: Event) {
    evt.preventDefault();
    dispatchEvent(this.element, 'spreadsheet-heading-click', {
      key: this.column.key,
      dir: this.column.dir === 'asc' ? 'desc' : 'asc'
    });
  }
}