System.register(["aurelia-templating", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, ReNavbar;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            ReNavbar = /** @class */ (function () {
                function ReNavbar() {
                    this.appTitle = 'RedEye Application';
                    this.color = '#c01e22';
                    this.appLogo = '/asset/redeyelogo.png';
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
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReNavbar.prototype, "appLogo", void 0);
                ReNavbar = __decorate([
                    aurelia_templating_1.customElement('re-navbar'),
                    aurelia_templating_1.containerless()
                ], ReNavbar);
                return ReNavbar;
            }());
            exports_1("ReNavbar", ReNavbar);
        }
    };
});
