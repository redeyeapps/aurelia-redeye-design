import { DateValueConverter } from './date';

describe('GetValueValueConverter', () => {
  let VC: DateValueConverter;

  // Set an arbitrary date
  const date = 1514508359462;

  beforeAll(() => {
    VC = new DateValueConverter();
  });

  it('should get some date back', () => {
    const res = VC.toView(date);
    expect(res.length).not.toEqual(0);
  });
});
