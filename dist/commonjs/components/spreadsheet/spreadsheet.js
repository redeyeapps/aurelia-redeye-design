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
var ReSpreadsheet = /** @class */ (function () {
    function ReSpreadsheet(element) {
        this.element = element;
        this.data = [
            { id: '1', name: 'Piping & Instrumetnation', number: '123123', fileType: 'S', type: 'Drawing', rev: 'C', isFavourite: false, isSelected: false },
            { id: '2', name: 'SOmething & Instrumetnation', number: '123123', fileType: 'S', type: 'Drawing', rev: 'D', isFavourite: false, isSelected: false },
            { id: '3', name: 'Piping & SOmethingas', number: '123123', fileType: 'S', type: 'Drawing', rev: 'A', isFavourite: false, isSelected: false }
        ];
        this.columns = [
            { key: '', label: '', type: '' }
        ];
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
