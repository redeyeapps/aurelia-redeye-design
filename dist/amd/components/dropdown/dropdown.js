var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-binding", "aurelia-templating"], function (require, exports, aurelia_binding_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReDropdown = /** @class */ (function () {
        function ReDropdown() {
            this.btnClass = '';
            this.badgeCount = null;
            this.menuOpen = false;
        }
        ReDropdown.prototype.detached = function () {
            // Clean up event listeners
            this.removeEventListener();
        };
        ReDropdown.prototype.handleButtonClick = function () {
            this.menuOpen = !this.menuOpen;
            if (this.menuOpen) {
                // Setup window click event listener
                document.addEventListener('click', this, false);
            }
            else {
                // And remove the listener
                this.removeEventListener();
            }
        };
        ReDropdown.prototype.clickEventHandler = function (evt) {
            var target = evt.target;
            if (!this.menuEl.contains(target) ||
                !target.hasAttribute('no-close')) {
                this.menuOpen = false;
                this.removeEventListener();
            }
        };
        ReDropdown.prototype.removeEventListener = function () {
            document.removeEventListener('click', this, false);
        };
        ReDropdown.prototype.handleEvent = function (evt) {
            if (evt.type === 'click') {
                this.clickEventHandler(evt);
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
});
