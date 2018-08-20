define(["require", "exports", "./date"], function (require, exports, date_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
