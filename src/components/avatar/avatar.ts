import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

@customElement('re-avatar')
export class ReAvatar {
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) size = '';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) initial = '';

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) square: boolean = false;

  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) imgUrl = '';

  public attachmentStyle = '';

  imgUrlChanged(n: string) {
    if (n && n.length) {
      this.attachmentStyle = `background-image: url(${n})`;
    } else {
      this.attachmentStyle = '';
    }
  }
}
