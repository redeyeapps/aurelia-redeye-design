import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { TaskQueue, inject } from 'aurelia-framework';

@customElement('re-form-textarea')
@inject(TaskQueue)
export class ReFormTextarea {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) label = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) name = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) placeholder = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) disabled = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) readonly = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) inline = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) hint = '';

  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) value = '';

  @bindable() rows = '';

  @bindable({
    defaulltBindingMode: bindingMode.oneTime
  }) focusOnAttach: null | boolean = null;

  private inputElement: null | HTMLInputElement = null;

  constructor(
    private taskQueue: TaskQueue
  ) {}

  attached() {
    if (this.focusOnAttach) {
      this.taskQueue.queueMicroTask(() => {
        if (this.inputElement !== null) {
          this.inputElement.focus();
        }
      });
    }
  }
}
