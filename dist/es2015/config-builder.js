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
            .useSpreadsheet()
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
    ConfigBuilder.prototype.useSpreadsheet = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
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
