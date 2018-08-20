var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
var ReAvatar = /** @class */ (function () {
    function ReAvatar() {
        this.size = '';
        this.initial = '';
        this.square = false;
        this.imgUrl = '';
        this.attachmentStyle = '';
    }
    ReAvatar.prototype.imgUrlChanged = function (n) {
        if (n && n.length) {
            this.attachmentStyle = "background-image: url(" + n + ")";
        }
        else {
            this.attachmentStyle = '';
        }
    };
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReAvatar.prototype, "size", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReAvatar.prototype, "initial", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReAvatar.prototype, "square", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReAvatar.prototype, "imgUrl", void 0);
    ReAvatar = __decorate([
        customElement('re-avatar')
    ], ReAvatar);
    return ReAvatar;
}());
export { ReAvatar };
