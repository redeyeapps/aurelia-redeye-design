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
      .useSpreadsheet()
      .useForm();
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./layout/navbar/navbar'));
    return this;
  }

  useForm(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./form/form'));
    return this;
  }

  useSpreadsheet(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
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