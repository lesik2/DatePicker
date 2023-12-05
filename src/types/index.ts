export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between'|'holiday';

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
export interface ICreateCalendar{
  type: TypeOfCalendar;
  isShowHolidays: boolean;
  isColorHolidays: boolean;
  startWeekFrom: TypeStartWeekFrom;
  dates: IDate[];
  date: Date;
  handlePrevDate: () => void,
  handleNextDate: () => void,
}
export type IServiceCalendar = Pick<Partial<ICreateCalendar>, 'type'|'isShowHolidays'|'startWeekFrom'|'isColorHolidays'>
export type ICalendar = Required<ICreateCalendar>
export interface IHolidays{
  date: string;
  localName: string;
  name: string;
  countryCode: string;
}