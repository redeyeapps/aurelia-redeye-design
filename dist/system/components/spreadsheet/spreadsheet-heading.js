System.register(["aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "../../events"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_templating_1, aurelia_binding_1, aurelia_dependency_injection_1, events_1, ReSpreadsheetHeading;
    var __moduleName = context_1 && context_1.id;
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
            ReSpreadsheetHeading = /** @class */ (function () {
                function ReSpreadsheetHeading(element) {
                    this.element = element;
                    this.column = {
                        key: '',
                        sortKey: '',
                        dir: ''
                    };
                }
                ReSpreadsheetHeading.prototype.click = function (evt) {
                    evt.preventDefault();
                    events_1.dispatchEvent(this.element, 'spreadsheet-heading-click', {
                        key: this.column.sortKey || this.column.key,
                        dir: this.column.dir === 'asc' ? 'desc' : 'asc'
                    });
                };
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReSpreadsheetHeading.prototype, "column", void 0);
                ReSpreadsheetHeading = __decorate([
                    aurelia_templating_1.customElement('re-spreadsheet-heading'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReSpreadsheetHeading);
                return ReSpreadsheetHeading;
            }());
            exports_1("ReSpreadsheetHeading", ReSpreadsheetHeading);
        }
    };
});
