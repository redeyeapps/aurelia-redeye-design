"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (date) {
        return date_fns_1.formatRelative(date, new Date());
    };
    return DateValueConverter;
}());
exports.DateValueConverter = DateValueConverter;
