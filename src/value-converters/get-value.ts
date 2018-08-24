export class GetValueValueConverter {
  toView(obj: any = {}, keyStr: string = '') {
    const keys = keyStr.split('.');
    let res = obj;
    for (const key of keys) {
      if (res) res = res[key];
      else return '';
    }
    return res || '';
  }
}
