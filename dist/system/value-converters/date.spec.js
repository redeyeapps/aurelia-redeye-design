System.register(["./date"], function (exports_1, context_1) {
    "use strict";
    var date_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (date_1_1) {
                date_1 = date_1_1;
            }
        ],
        execute: function () {
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
        }
    };
});
