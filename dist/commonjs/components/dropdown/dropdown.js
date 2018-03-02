"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_binding_1 = require("aurelia-binding");
var aurelia_templating_1 = require("aurelia-templating");
var ReDropdown = /** @class */ (function () {
    function ReDropdown() {
        this.btnClass = '';
        this.badgeCount = null;
        this.menuOpen = false;
    }
    ReDropdown.prototype.detached = function () {
        // Clean up event listeners
        this._removeEventListener();
    };
    ReDropdown.prototype.handleButtonClick = function () {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            // Setup window click event listener
            document.addEventListener('click', this, false);
        }
        else {
            // And remove the listener
            this._removeEventListener();
        }
    };
    ReDropdown.prototype._clickEventHandler = function (evt) {
        var target = evt.target;
        if (!this.menuEl.contains(target) ||
            !target.hasAttribute('no-close')) {
            this.menuOpen = false;
            this._removeEventListener();
        }
    };
    ReDropdown.prototype._removeEventListener = function () {
        document.removeEventListener('click', this, false);
    };
    ReDropdown.prototype.handleEvent = function (evt) {
        if (evt.type === 'click') {
            this._clickEventHandler(evt);
        }
    };
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReDropdown.prototype, "btnClass", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReDropdown.prototype, "badgeCount", void 0);
    ReDropdown = __decorate([
        aurelia_templating_1.customElement('re-dropdown')
    ], ReDropdown);
    return ReDropdown;
}());
exports.ReDropdown = ReDropdown;
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
