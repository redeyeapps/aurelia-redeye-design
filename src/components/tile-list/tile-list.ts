import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

import { dispatchEvent } from '../../events';
import { debounce } from '../../common/debouncer';

@customElement('re-tile-list')
@inject(Element)
export class ReTileList {
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) data: { id: string }[] = [];

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) config: {
    [entityType: string]: {
      icon: { class: string },
      content: {
        title: { key: string },
        subtitle: { key: string }
      }
    }
  } = {};

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) loading = false;

  constructor(
    private element: HTMLElement
  ) {}

  attached() {
    this.element.addEventListener('scroll', this.handleScrollBound);
  }

  detached() {
    this.element.removeEventListener('scroll', this.handleScrollBound);
  }

  handleTileClick(tile: any) {
    // Dispatch a tile-click event so the parent can decide what to do with it
    dispatchEvent(this.element, 'tile-click', {
      tile
    });
    return false;
  }

  handleScroll = debounce(this.scrolled, 300);
  handleScrollBound = this.handleScroll.bind(this);
  
  scrolled(evt: Event) {
    const target = <HTMLElement> evt.target;
    // dispatch the event when the scroll reaches about 90% of the way down.
    if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight - 120)) {
      dispatchEvent(this.element, 'scroll-end');
    }
  }
}