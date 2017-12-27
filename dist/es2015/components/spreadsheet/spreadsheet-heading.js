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
var ReSpreadsheetHeading = /** @class */ (function () {
    function ReSpreadsheetHeading(element) {
        this.element = element;
        this.column = {
            key: '',
            dir: ''
        };
    }
    ReSpreadsheetHeading.prototype.click = function (evt) {
        evt.preventDefault();
        dispatchEvent(this.element, 'spreadsheet-heading-click', {
            key: this.column.key,
            dir: this.column.dir === 'asc' ? 'desc' : 'asc'
        });
    };
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReSpreadsheetHeading.prototype, "column", void 0);
    ReSpreadsheetHeading = __decorate([
        customElement('re-spreadsheet-heading'),
        inject(Element)
    ], ReSpreadsheetHeading);
    return ReSpreadsheetHeading;
}());
export { ReSpreadsheetHeading };
