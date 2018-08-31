System.register([], function (exports_1, context_1) {
    "use strict";
    var changeCase, ChangeTextCaseValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            changeCase = require('change-case');
            ChangeTextCaseValueConverter = /** @class */ (function () {
                function ChangeTextCaseValueConverter() {
                }
                ChangeTextCaseValueConverter.prototype.toView = function (str) {
                    if (str === void 0) { str = ''; }
                    var types = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        types[_i - 1] = arguments[_i];
                    }
                    if (!types.length || types[0] === undefined)
                        return str;
                    var temp = str;
                    for (var _a = 0, types_1 = types; _a < types_1.length; _a++) {
                        var type = types_1[_a];
                        temp = changeCase[type](temp);
                    }
                    return temp;
                };
                return ChangeTextCaseValueConverter;
            }());
            exports_1("ChangeTextCaseValueConverter", ChangeTextCaseValueConverter);
        }
    };
});
