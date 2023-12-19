export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between'|'end';
export type TypeOfCalendar = 'month'|'week'|'year';
export type TypeStartWeekFrom = 'Mo'|'Su';
export type IColor = 'default'|'primary'|'secondary';
export type ISize = 'default'|'medium';

export interface INote{
  text: string;
  id: number;
}
export interface IDate{
  type: TypeOfDate;
  dateNumber: number;
  holiday?: boolean;
}
export interface IHolidays{
  date: string;
  localName: string;
  name: string;
  countryCode: string;
}
export type StartOrEnd = 'end'|'start';
export interface IYearDate{
  dates: IDate[];
  date: Date;
}