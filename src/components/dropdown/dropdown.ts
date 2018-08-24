import { bindingMode } from 'aurelia-binding';
import { customElement, bindable } from 'aurelia-templating';

@customElement('re-dropdown')
export class ReDropdown {
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) btnClass = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) badgeCount = null;

  private menuOpen: Boolean = false;
  private menuEl: HTMLElement;

  detached() {
    // Clean up event listeners
    this.removeEventListener();
  }

  handleButtonClick() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      // Setup window click event listener
      document.addEventListener('click', this, false);
    } else {
      // And remove the listener
      this.removeEventListener();
    }
  }

  private clickEventHandler(evt: Event) {
    const target = <HTMLElement> evt.target;
    if (!this.menuEl.contains(target) ||
        !target.hasAttribute('no-close')) {
      this.menuOpen = false;
      this.removeEventListener();
    }
  }

  private removeEventListener() {
    document.removeEventListener('click', this, false);
  }

  handleEvent(evt: Event) {
    if (evt.type === 'click') {
      this.clickEventHandler(evt);
    }
  }
}
