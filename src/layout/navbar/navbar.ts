import { bindable, customElement, containerless } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-navbar')
@containerless()
export class ReNavbar {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) appTitle = 'RedEye Application';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) color = '#c01e22';
}