System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GetValueValueConverter;
    return {
        setters: [],
        execute: function () {
            GetValueValueConverter = /** @class */ (function () {
                function GetValueValueConverter() {
                }
                GetValueValueConverter.prototype.toView = function (obj, keyStr) {
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
            exports_1("GetValueValueConverter", GetValueValueConverter);
        }
    };
});
