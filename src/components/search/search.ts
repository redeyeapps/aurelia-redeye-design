import { bindable, inject } from 'aurelia-framework';
import { bindingMode } from 'aurelia-binding';
import { Value } from './models';

@inject(Element)
export class ReSearch {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) searchValue: string = '';
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) selectedValue: string = '';
  displayedValue: string = '';
  @bindable options: Value[] = [];
  @bindable blurHandler: Function;
  @bindable focusHandler: Function;
  @bindable typingHandler: Function;
  @bindable returnHandler: Function;
  @bindable placeholder: string = '';
  @bindable showDropdown = false;
  verticalDisplayed: Value[] = [];
  horizontalDisplayed: Value[] = [];
  searchExpanded: boolean = false;
  expandDropdown: boolean = false;
  element: any | null;

  constructor(element: any) {
    this.element = element;
  }

  attached() {
    if (!this.selectedValue && this.options && this.options.length) {
      const defaultValue: Value = this.options[0];
      this.selectedValue = defaultValue.value;
      this.displayedValue = defaultValue.label;
    }
    this.filterOptions();
    document.addEventListener('click', this.handleClickEvent);
  }

  detached() {
    document.removeEventListener('click', this.handleClickEvent);
  }

  searchValueChanged(n: string) {
    // search value is not initializing on attached, temporary fix to display search input
    if (n) this.searchExpanded = true;
  }

  handleClickEvent = (evt: MouseEvent) => {
    if (!this.element.contains(evt.target)) {
      this.expandDropdown = false;
    }
    evt.stopPropagation();
  }

  handleDropdownClick() {
    this.expandDropdown = !this.expandDropdown;
  }

  selectedValueChanged() {
    if (this.selectedValue) {
      const selectedValue: Value | undefined = this.options.find((f: Value) =>
        f.value === this.selectedValue);
      if (selectedValue) this.displayedValue = selectedValue.label;
    }
  }

  handleBlur() {
    if (this.blurHandler) this.blurHandler();
  }

  handleFocus() {
    if (this.focusHandler) this.focusHandler();
  }

  handleTyping() {
    if (this.typingHandler) this.typingHandler();
  }

  handleReturn() {
    if (this.returnHandler) this.returnHandler();
  }

  iconClick() {
    this.expandDropdown = false;
    this.searchExpanded = !this.searchExpanded;
    this.filterOptions();
  }

  filterOptions() {
    if (!this.searchExpanded) {
      this.horizontalDisplayed = this.options.slice(0, 4);
      this.verticalDisplayed = this.options.slice(4);
    } else {
      this.verticalDisplayed = this.options;
    }
  }

  handleTileClick(evt: any) {
    if (this.searchExpanded) {
      this.expandDropdown = !this.expandDropdown;
    }
    this.showDropdown = false;
    this.displayedValue = evt.target.innerText;
    const selectedValue: Value | undefined = this.options.find((f: Value) =>
      f.label === this.displayedValue);
    if (selectedValue) this.selectedValue = selectedValue.value;
  }
}
