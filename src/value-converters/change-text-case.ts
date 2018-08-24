const changeCase = require('change-case');

export class ChangeTextCaseValueConverter {
  toView(str: string = '', ...types: string[]) {
    if (!types.length || types[0] === undefined) return str;
    let temp = str;
    for (const type of types) {
      temp = changeCase[type](temp);
    }
    return temp;
  }
}
