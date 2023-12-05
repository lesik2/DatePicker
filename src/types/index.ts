export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between';

export interface IDate{
  type: TypeOfDate;
  dateNumber: number;
}
export type TypeOfCalendar = 'month'|'week';
export type TypeStartWeekFrom = 'Mo'|'Su';
export interface ICalendarServiceState{
  currentDate: Date;
  changeDate: Date;
}
export interface ICalendarService{

}
export interface ICreateCalendar{
  type?: TypeOfCalendar;
  isShowHolidays?: boolean;
  startWeekFrom?: TypeStartWeekFrom;
  readonly dates?: IDate[];
  readonly date?: Date;
  readonly handlePrevDate?: () => void,
  readonly handleNextDate?: () => void,
}
export type ICalendar = Required<ICreateCalendar>