var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { dispatchEvent } from '../../events';
import { debounce } from '../../common/debouncer';
var ReTileList = /** @class */ (function () {
    function ReTileList(element) {
        this.element = element;
        this.data = [];
        this.config = {};
        this.loading = false;
        this.handleScroll = debounce(this.scrolled, 300);
        this.handleScrollBound = this.handleScroll.bind(this);
    }
    ReTileList.prototype.attached = function () {
        this.element.addEventListener('scroll', this.handleScrollBound);
    };
    ReTileList.prototype.detached = function () {
        this.element.removeEventListener('scroll', this.handleScrollBound);
    };
    ReTileList.prototype.handleTileClick = function (tile) {
        // Dispatch a tile-click event so the parent can decide what to do with it
        dispatchEvent(this.element, 'tile-click', {
            tile: tile
        });
        return false;
    };
    ReTileList.prototype.scrolled = function (evt) {
        var target = evt.target;
        // dispatch the event when the scroll reaches about 90% of the way down.
        if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight - 120)) {
            dispatchEvent(this.element, 'scroll-end');
        }
    };
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReTileList.prototype, "data", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReTileList.prototype, "config", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReTileList.prototype, "loading", void 0);
    ReTileList = __decorate([
        customElement('re-tile-list'),
        inject(Element)
    ], ReTileList);
    return ReTileList;
}());
export { ReTileList };
