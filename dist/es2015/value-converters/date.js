import { formatRelative } from 'date-fns';
var DateValueConverter = /** @class */ (function () {
    function DateValueConverter() {
    }
    DateValueConverter.prototype.toView = function (date) {
        return formatRelative(date, new Date());
    };
    return DateValueConverter;
}());
export { DateValueConverter };
