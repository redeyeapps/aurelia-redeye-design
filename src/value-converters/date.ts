import { formatRelative } from 'date-fns';

export class DateValueConverter {
  toView(date: number) {
    return formatRelative(date, new Date());
  }
}