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
var ReNavbar = /** @class */ (function () {
    function ReNavbar() {
        this.appTitle = 'RedEye Application';
        this.color = '#c01e22';
    }
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReNavbar.prototype, "appTitle", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReNavbar.prototype, "color", void 0);
    ReNavbar = __decorate([
        aurelia_templating_1.customElement('re-navbar'),
        aurelia_templating_1.containerless()
    ], ReNavbar);
    return ReNavbar;
}());
exports.ReNavbar = ReNavbar;
