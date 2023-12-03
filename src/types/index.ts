export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between';

export interface IDate{
  type: TypeOfDate;
  dateNumber: number;
}
export type TypeOfCalendar = 'month'|'week';
export type TypeStartWeekFrom = 'Mo'|'Su';
export interface ICalendarServiceState{
  currentDate: Date;
}
export interface ICalendarService{

}
export interface ICreateCalendar{
  type: TypeOfCalendar;
  isShowHolidays: boolean;
  startWeekFrom: TypeStartWeekFrom;
}
export interface ICalendar extends ICreateCalendar{
  dates: IDate[];
}