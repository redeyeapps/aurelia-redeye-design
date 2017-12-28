define(["require", "exports", "date-fns"], function (require, exports, date_fns_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateValueConverter = /** @class */ (function () {
        function DateValueConverter() {
        }
        DateValueConverter.prototype.toView = function (date) {
            return date_fns_1.formatRelative(date, new Date());
        };
        return DateValueConverter;
    }());
    exports.DateValueConverter = DateValueConverter;
});
