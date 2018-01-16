import { DateValueConverter } from './date';
describe('GetValueValueConverter', function () {
    var VC;
    // Set an arbitrary date
    var date = 1514508359462;
    beforeAll(function () {
        VC = new DateValueConverter();
    });
    it('should get some date back', function () {
        var res = VC.toView(date);
        expect(res.length).not.toEqual(0);
    });
});
