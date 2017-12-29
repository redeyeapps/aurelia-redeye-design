var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
// import {TaskQueue} from 'aurelia-task-queue';
// import {getBooleanFromAttributeValue} from '../common/attributes';
// import {MdInputUpdateService} from './input-update-service';
import { dispatchEvent } from '../../events';
import { debounce } from '../../common/debouncer';
var ReSpreadsheet = /** @class */ (function () {
    function ReSpreadsheet(element) {
        this.element = element;
        this.data = [
            { id: '', isFavourite: false, isSelected: false }
        ];
        this.columns = [
            { key: '', label: '', type: '' }
        ];
        this.responsiveCols = 0;
        this.handleScroll = debounce(this.scrolled, 300);
    }
    ReSpreadsheet.prototype.toggleFavourite = function (id) {
        var row = this.data.find(function (val) { return val.id === id; });
        if (row) {
            dispatchEvent(this.element, 'favourite-click', {
                id: id,
                isFavourite: !row.isFavourite
            });
        }
    };
    ReSpreadsheet.prototype.toggleSelected = function (id) {
        var row = this.data.find(function (val) { return val.id === id; });
        if (row) {
            dispatchEvent(this.element, 'select-click', {
                id: id,
                isSelected: !row.isSelected
            });
        }
    };
    ReSpreadsheet.prototype.columnsChanged = function (nv) {
        this.responsiveCols = nv.filter(function (val) { return val.responsive; }).length;
    };
    ReSpreadsheet.prototype.scrolled = function (evt) {
        var target = evt.target;
        // dispatch the event when the scroll reaches about 90% of the way down.
        if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight * 0.9)) {
            dispatchEvent(this.element, 'scroll-end');
        }
    };
    ReSpreadsheet.prototype.handleRowClick = function (evt, row) {
        var target = evt.target;
        // Make sure you are not clicking the favourite or select icons
        if (target.classList.contains('form-checkbox--icon') ||
            target.tagName === 'INPUT' ||
            target.tagName === 'A') {
            return true;
        }
        // If a selection has already been made, clicking a row will select that row.
        if (this.data.filter(function (val) { return val.isSelected; }).length > 0) {
            var idx = this.data.findIndex(function (val) { return val.id === row.id; });
            this.data[idx].isSelected = !this.data[idx].isSelected;
            return false;
        }
        // Dispatch a row click event, so the parent can decide what to do with it
        dispatchEvent(this.element, 'row-click', {
            row: row
        });
        return false;
    };
    ReSpreadsheet.id = 0;
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReSpreadsheet.prototype, "data", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReSpreadsheet.prototype, "columns", void 0);
    ReSpreadsheet = __decorate([
        customElement('re-spreadsheet'),
        inject(Element)
    ], ReSpreadsheet);
    return ReSpreadsheet;
}());
export { ReSpreadsheet };
