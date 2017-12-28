System.register(["aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "../../events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, aurelia_dependency_injection_1, events_1, ReSpreadsheet;
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
            }
        ],
        execute: function () {
            ReSpreadsheet = /** @class */ (function () {
                function ReSpreadsheet(element) {
                    this.element = element;
                    this.data = [
                        { id: '', isFavourite: false, isSelected: false }
                    ];
                    this.columns = [
                        { key: '', label: '', type: '' }
                    ];
                    this.responsiveCols = 0;
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
            exports_1("ReSpreadsheet", ReSpreadsheet);
        }
    };
});
