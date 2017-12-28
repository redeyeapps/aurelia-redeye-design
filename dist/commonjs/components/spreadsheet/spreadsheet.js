"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
// import {TaskQueue} from 'aurelia-task-queue';
// import {getBooleanFromAttributeValue} from '../common/attributes';
// import {MdInputUpdateService} from './input-update-service';
var events_1 = require("../../events");
var debouncer_1 = require("../../common/debouncer");
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
        this.handleScroll = debouncer_1.debounce(this.scrolled, 300);
    }
    ReSpreadsheet.prototype.toggleFavourite = function (id) {
        var row = this.data.find(function (val) { return val.id === id; });
        if (row) {
            events_1.dispatchEvent(this.element, 'favourite-click', {
                id: id,
                isFavourite: !row.isFavourite
            });
        }
    };
    ReSpreadsheet.prototype.toggleSelected = function (id) {
        var row = this.data.find(function (val) { return val.id === id; });
        if (row) {
            events_1.dispatchEvent(this.element, 'select-click', {
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
            events_1.dispatchEvent(this.element, 'scroll-end');
        }
    };
    ReSpreadsheet.id = 0;
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReSpreadsheet.prototype, "data", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReSpreadsheet.prototype, "columns", void 0);
    ReSpreadsheet = __decorate([
        aurelia_templating_1.customElement('re-spreadsheet'),
        aurelia_dependency_injection_1.inject(Element)
    ], ReSpreadsheet);
    return ReSpreadsheet;
}());
exports.ReSpreadsheet = ReSpreadsheet;
