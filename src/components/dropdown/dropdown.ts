import { bindingMode } from 'aurelia-binding';
import { customElement, bindable } from 'aurelia-templating';

@customElement('re-dropdown')
export class ReDropdown {
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) btnClass = 'btn';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) badgeCount = null;

  private menuOpen: Boolean = false;
  private menuEl: HTMLElement;

  detached() {
    // Clean up event listeners
    this._removeEventListener();
  }

  handleButtonClick() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      // Setup window click event listener
      document.addEventListener('click', this, false);
    } else {
      // And remove the listener
      this._removeEventListener();
    }
  }

  _clickEventHandler(evt: Event) {
    const target = <HTMLElement> evt.target;
    if (!this.menuEl.contains(target) ||
        target.hasAttribute('close-menu')) {
      this.menuOpen = false;
      this._removeEventListener();
    }
  }

  _removeEventListener() {
    document.removeEventListener('click', this, false);
  }

  handleEvent(evt: Event) {
    if (evt.type === 'click') {
      this._clickEventHandler(evt);
    }
  }
}

// @inject(Element)
// export class BadgeCustomAttribute {
//   constructor(element) {
//     this.element = element;
//   }

//   valueChanged(newCount) {
//     if (newCount) {
//       this.element.setAttribute('data-badge', newCount);
//     } else {
//       this.element.removeAttribute('data-badge');
//     }
//   }
// }
