"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("./date");
describe('GetValueValueConverter', function () {
    var VC;
    // Set an arbitrary date
    var date = 1514508359462;
    beforeAll(function () {
        VC = new date_1.DateValueConverter();
    });
    it('should get some date back', function () {
        var res = VC.toView(date);
        expect(res.length).not.toEqual(0);
    });
});
