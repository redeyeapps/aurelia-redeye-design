import { PLATFORM } from 'aurelia-pal';

/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  public globalResources: string[] = [];
  public useGlobalResources: boolean = true;

  useAll(): ConfigBuilder {
    return this
      .useNavbar()
      .useAvatar()
      .useDropdown()
      .useSpreadsheet()
      .useTileList()
      .useValueConverters()
      .useCustomAtrributes()
      .useForm();
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./layout/navbar/navbar'));
    return this;
  }

  useForm(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./form/form'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-checkbox'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-number'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-radio'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-scale'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-select'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-text'));
    this.globalResources.push(PLATFORM.moduleName('./form/form-textarea'));
    return this;
  }

  useAvatar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./components/avatar/avatar'));
    return this;
  }

  useDropdown(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./components/dropdown/dropdown'));
    return this;
  }

  useSpreadsheet(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
    return this;
  }

  useTileList(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./components/tile-list/tile-list'));
    return this;
  }

  useValueConverters(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./value-converters/get-value'));
    return this;
  }

  useCustomAtrributes(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/active-class'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-disabled'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-maxlength'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-number'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-readonly'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-rows'));
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/validation-class'));
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
}