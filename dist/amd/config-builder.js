define(["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
    * Plugin configuration builder
    */
    var ConfigBuilder = /** @class */ (function () {
        function ConfigBuilder() {
            this.globalResources = [];
            this.useGlobalResources = true;
        }
        ConfigBuilder.prototype.useAll = function () {
            return this
                .useNavbar()
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
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./form/form-checkbox'));
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./form/form-radio'));
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./form/form-text'));
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
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./custom-attributes/form-disabled'));
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./custom-attributes/form-maxlength'));
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./custom-attributes/form-readonly'));
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
    exports.ConfigBuilder = ConfigBuilder;
});
