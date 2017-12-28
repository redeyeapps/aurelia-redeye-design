import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
// import {TaskQueue} from 'aurelia-task-queue';
// import {getBooleanFromAttributeValue} from '../common/attributes';
// import {MdInputUpdateService} from './input-update-service';
import { dispatchEvent } from '../../events';

@customElement('re-spreadsheet')
@inject(Element)
export class ReSpreadsheet {
  static id = 0;

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) data = [
    { id: '', isFavourite: false, isSelected: false }
  ];
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) columns = [
    { key: '', label: '', type: '' }
  ];

  public responsiveCols = 0;

  constructor(
    private element: HTMLElement
  ) {}

  toggleFavourite(id: string) {
    const row = this.data.find(val => val.id === id);
    if (row) {
      dispatchEvent(this.element, 'favourite-click', {
        id,
        isFavourite: !row.isFavourite
      });
    }
  }

  toggleSelected(id: string) {
    const row = this.data.find(val => val.id === id);
    if (row) {
      dispatchEvent(this.element, 'select-click', {
        id,
        isSelected: !row.isSelected
      });
    }
  }

  columnsChanged(nv: {responsive: boolean}[] ) {
    this.responsiveCols = nv.filter(val => val.responsive).length;
  }
}
