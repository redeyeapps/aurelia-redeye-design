import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';

import { dispatchEvent } from '../../events';
// import { debounce } from '../../common/debouncer';

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

  constructor(
    private element: HTMLElement
  ) {}

  handleTileClick(tile: any) {
    // Dispatch a tile-click event so the parent can decide what to do with it
    dispatchEvent(this.element, 'tile-click', {
      tile
    });
    return false;
  }
}