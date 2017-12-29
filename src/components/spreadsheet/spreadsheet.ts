import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
// import {TaskQueue} from 'aurelia-task-queue';
// import {getBooleanFromAttributeValue} from '../common/attributes';
// import {MdInputUpdateService} from './input-update-service';
import { dispatchEvent } from '../../events';
import { debounce } from '../../common/debouncer';

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

  handleScroll = debounce(this.scrolled, 300);

  scrolled(evt: Event) {
    const target = <HTMLElement> evt.target;
    // dispatch the event when the scroll reaches about 90% of the way down.
    if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight * 0.9)) {
      dispatchEvent(this.element, 'scroll-end');
    }
  }

  handleRowClick(evt: Event, row: any) {
    const target = <HTMLElement> evt.target;
    // Make sure you are not clicking the favourite or select icons
    if (target.classList.contains('form-checkbox--icon') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'A') {
      return true;
    }

    // If a selection has already been made, clicking a row will select that row.
    if (this.data.filter(val => val.isSelected).length > 0) {
      const idx = this.data.findIndex(val => val.id === row.id);
      this.data[idx].isSelected = !this.data[idx].isSelected;
      return false;
    }

    // Dispatch a row click event, so the parent can decide what to do with it
    dispatchEvent(this.element, 'row-click', {
      row
    });
    return false;
  }
}
