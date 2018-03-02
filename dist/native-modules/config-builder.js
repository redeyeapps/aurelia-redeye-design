import { PLATFORM } from 'aurelia-pal';
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
        this.globalResources.push(PLATFORM.moduleName('./layout/navbar/navbar'));
        return this;
    };
    ConfigBuilder.prototype.useForm = function () {
        this.globalResources.push(PLATFORM.moduleName('./form/form'));
        return this;
    };
    ConfigBuilder.prototype.useDropdown = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/dropdown/dropdown'));
        return this;
    };
    ConfigBuilder.prototype.useSpreadsheet = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
        return this;
    };
    ConfigBuilder.prototype.useTileList = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/tile-list/tile-list'));
        return this;
    };
    ConfigBuilder.prototype.useValueConverters = function () {
        this.globalResources.push(PLATFORM.moduleName('./value-converters/get-value'));
        return this;
    };
    ConfigBuilder.prototype.useCustomAtrributes = function () {
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/active-class'));
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
export { ConfigBuilder };
