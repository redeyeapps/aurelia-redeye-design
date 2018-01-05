import { GetValueValueConverter } from './get-value';

describe('GetValueValueConverter', () => {
  let VC: GetValueValueConverter;
  const object = {
    name: 'hello',
    address: {
      street: 'Warren St',
      suburb: 'Indooroopilly'
    }
  };

  beforeAll(() => {
    VC = new GetValueValueConverter();
  });

  it('should get the correct value on a single level', () => {
    const res = VC.toView(object, 'name');
    expect(res).toEqual(object.name);
  });

  it('should get the correct value on multiple levels', () => {
    const res = VC.toView(object, 'address.street');
    expect(res).toEqual(object.address.street);
    const res2 = VC.toView(object, 'address.suburb');
    expect(res2).toEqual(object.address.suburb);
  });

  it('should return empty string when it doesn\'t exist', () => {
    const res = VC.toView(object, 'phone');
    expect(res).toEqual('');
  });

  it('should return empty string when it doesn\'t exist on multiple', () => {
    const res = VC.toView(object, 'address.city');
    expect(res).toEqual('');
  });
});
