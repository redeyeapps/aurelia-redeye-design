"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_binding_1 = require("aurelia-binding");
var ReSearch = /** @class */ (function () {
    function ReSearch(element) {
        var _this = this;
        this.searchValue = '';
        this.selectedValue = '';
        this.displayedValue = '';
        this.options = [];
        this.placeholder = '';
        this.showDropdown = false;
        this.verticalDisplayed = [];
        this.horizontalDisplayed = [];
        this.searchExpanded = false;
        this.expandDropdown = false;
        this.handleClickEvent = function (evt) {
            if (!_this.element.contains(evt.target)) {
                _this.expandDropdown = false;
            }
            evt.stopPropagation();
        };
        this.element = element;
    }
    ReSearch.prototype.attached = function () {
        if (!this.selectedValue && this.options && this.options.length) {
            var defaultValue = this.options[0];
            this.selectedValue = defaultValue.value;
            this.displayedValue = defaultValue.label;
        }
        this.filterOptions();
        document.addEventListener('click', this.handleClickEvent);
    };
    ReSearch.prototype.detached = function () {
        document.removeEventListener('click', this.handleClickEvent);
    };
    ReSearch.prototype.searchValueChanged = function (n) {
        // search value is not initializing on attached, temporary fix to display search input
        if (n)
            this.searchExpanded = true;
    };
    ReSearch.prototype.handleDropdownClick = function () {
        this.expandDropdown = !this.expandDropdown;
    };
    ReSearch.prototype.selectedValueChanged = function () {
        var _this = this;
        if (this.selectedValue) {
            var selectedValue = this.options.find(function (f) {
                return f.value === _this.selectedValue;
            });
            if (selectedValue)
                this.displayedValue = selectedValue.label;
        }
    };
    ReSearch.prototype.handleBlur = function () {
        if (this.blurHandler)
            this.blurHandler();
    };
    ReSearch.prototype.handleFocus = function () {
        if (this.focusHandler)
            this.focusHandler();
    };
    ReSearch.prototype.handleTyping = function () {
        if (this.typingHandler)
            this.typingHandler();
    };
    ReSearch.prototype.handleReturn = function () {
        if (this.returnHandler)
            this.returnHandler();
    };
    ReSearch.prototype.iconClick = function () {
        this.searchExpanded = !this.searchExpanded;
        this.filterOptions();
    };
    ReSearch.prototype.filterOptions = function () {
        if (!this.searchExpanded) {
            this.horizontalDisplayed = this.options.slice(0, 4);
            this.verticalDisplayed = this.options.slice(4);
        }
        else {
            this.verticalDisplayed = this.options;
        }
    };
    ReSearch.prototype.handleTileClick = function (evt) {
        var _this = this;
        if (this.searchExpanded) {
            this.expandDropdown = !this.expandDropdown;
        }
        this.showDropdown = false;
        this.displayedValue = evt.target.innerText;
        var selectedValue = this.options.find(function (f) {
            return f.label === _this.displayedValue;
        });
        if (selectedValue)
            this.selectedValue = selectedValue.value;
    };
    __decorate([
        aurelia_framework_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
        })
    ], ReSearch.prototype, "searchValue", void 0);
    __decorate([
        aurelia_framework_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
        })
    ], ReSearch.prototype, "selectedValue", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "options", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "blurHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "focusHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "typingHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "returnHandler", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "placeholder", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ReSearch.prototype, "showDropdown", void 0);
    ReSearch = __decorate([
        aurelia_framework_1.inject(Element)
    ], ReSearch);
    return ReSearch;
}());
exports.ReSearch = ReSearch;
