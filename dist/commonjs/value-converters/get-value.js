"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetValueValueConverter = /** @class */ (function () {
    function GetValueValueConverter() {
    }
    GetValueValueConverter.prototype.toView = function (obj, keyStr) {
        if (obj === void 0) { obj = {}; }
        if (keyStr === void 0) { keyStr = ''; }
        var keys = keyStr.split('.');
        var res = obj;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (res)
                res = res[key];
            else
                return '';
        }
        return res;
    };
    return GetValueValueConverter;
}());
exports.GetValueValueConverter = GetValueValueConverter;
