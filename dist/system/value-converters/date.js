System.register(["date-fns"], function (exports_1, context_1) {
    "use strict";
    var date_fns_1, DateValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (date_fns_1_1) {
                date_fns_1 = date_fns_1_1;
            }
        ],
        execute: function () {
            DateValueConverter = /** @class */ (function () {
                function DateValueConverter() {
                }
                DateValueConverter.prototype.toView = function (date) {
                    return date_fns_1.formatRelative(date, new Date());
                };
                return DateValueConverter;
            }());
            exports_1("DateValueConverter", DateValueConverter);
        }
    };
});
