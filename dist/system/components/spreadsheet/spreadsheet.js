System.register(["aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "../../events", "../../common/debouncer"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, aurelia_dependency_injection_1, events_1, debouncer_1, ReSpreadsheet;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (debouncer_1_1) {
                debouncer_1 = debouncer_1_1;
            }
        ],
        execute: function () {
            ReSpreadsheet = /** @class */ (function () {
                function ReSpreadsheet(element) {
                    this.element = element;
                    this.data = [];
                    this.columns = [];
                    this.loading = false;
                    this.responsiveCols = 0;
                    this.handleScroll = debouncer_1.debounce(this.scrolled, 300);
                    this.handleScrollBound = this.handleScroll.bind(this);
                }
                ReSpreadsheet.prototype.attached = function () {
                    this.element.addEventListener('scroll', this.handleScrollBound);
                };
                ReSpreadsheet.prototype.detached = function () {
                    this.element.removeEventListener('scroll', this.handleScrollBound);
                };
                ReSpreadsheet.prototype.toggleFavourite = function (id) {
                    var row = this.data.find(function (val) { return val.id === id; });
                    if (row) {
                        events_1.dispatchEvent(this.element, 'favourite-click', {
                            id: id,
                            isFavourite: row.isFavourite
                        });
                    }
                };
                ReSpreadsheet.prototype.toggleSelected = function (id) {
                    var row = this.data.find(function (val) { return val.id === id; });
                    if (row) {
                        events_1.dispatchEvent(this.element, 'select-click', {
                            id: id,
                            isSelected: row.isSelected
                        });
                    }
                };
                ReSpreadsheet.prototype.columnsChanged = function (nv) {
                    this.responsiveCols = nv && nv.length ? nv.filter(function (val) { return val.responsive; }).length : 1;
                };
                ReSpreadsheet.prototype.scrolled = function (evt) {
                    var target = evt.target;
                    // dispatch the event when the scroll reaches about 90% of the way down.
                    if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight - 120)) {
                        events_1.dispatchEvent(this.element, 'scroll-end');
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
                    events_1.dispatchEvent(this.element, 'row-click', {
                        row: row
                    });
                    return false;
                };
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
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReSpreadsheet.prototype, "loading", void 0);
                ReSpreadsheet = __decorate([
                    aurelia_templating_1.customElement('re-spreadsheet'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReSpreadsheet);
                return ReSpreadsheet;
            }());
            exports_1("ReSpreadsheet", ReSpreadsheet);
        }
    };
});
