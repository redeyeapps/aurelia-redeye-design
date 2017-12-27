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
    { id: '1', name: 'Piping & Instrumetnation', number: '123123', fileType: 'S', type: 'Drawing', rev: 'C', isFavourite: false, isSelected: false },
    { id: '2', name: 'SOmething & Instrumetnation', number: '123123', fileType: 'S', type: 'Drawing', rev: 'D', isFavourite: false, isSelected: false },
    { id: '3', name: 'Piping & SOmethingas', number: '123123', fileType: 'S', type: 'Drawing', rev: 'A', isFavourite: false, isSelected: false }
  ];
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) columns = [
    { key: '', label: '', type: '' }
  ];

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
}
