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
    this.globalResources.push(PLATFORM.moduleName('./form/form-radio'));
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
    this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-readonly'));
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