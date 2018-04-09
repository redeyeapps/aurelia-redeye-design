System.register(["aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_pal_1, ConfigBuilder;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            /**
            * Plugin configuration builder
            */
            ConfigBuilder = /** @class */ (function () {
                function ConfigBuilder() {
                    this.globalResources = [];
                    this.useGlobalResources = true;
                }
                ConfigBuilder.prototype.useAll = function () {
                    return this
                        .useNavbar()
                        .useAvatar()
                        .useDropdown()
                        .useSpreadsheet()
                        .useTileList()
                        .useValueConverters()
                        .useCustomAtrributes()
                        .useForm();
                };
                ConfigBuilder.prototype.useNavbar = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./layout/navbar/navbar'));
                    return this;
                };
                ConfigBuilder.prototype.useForm = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./form/form'));
                    return this;
                };
                ConfigBuilder.prototype.useAvatar = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./components/avatar/avatar'));
                    return this;
                };
                ConfigBuilder.prototype.useDropdown = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./components/dropdown/dropdown'));
                    return this;
                };
                ConfigBuilder.prototype.useSpreadsheet = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
                    return this;
                };
                ConfigBuilder.prototype.useTileList = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./components/tile-list/tile-list'));
                    return this;
                };
                ConfigBuilder.prototype.useValueConverters = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./value-converters/get-value'));
                    return this;
                };
                ConfigBuilder.prototype.useCustomAtrributes = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./custom-attributes/active-class'));
                    return this;
                };
                /**
                * Don't globalize any resources
                * Allows you to import yourself via <require></require>
                */
                ConfigBuilder.prototype.withoutGlobalResources = function () {
                    this.useGlobalResources = false;
                    return this;
                };
                return ConfigBuilder;
            }());
            exports_1("ConfigBuilder", ConfigBuilder);
        }
    };
});
