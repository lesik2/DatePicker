export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between'|'end';

export interface IDate{
  type: TypeOfDate;
  dateNumber: number;
  holiday?: boolean;
}
export type IDateComponent = IDate & {date: Date,incrementOfClicks: (numberOfDate: number) => void};
export type TypeOfCalendar = 'month'|'week'|'year';
export type TypeStartWeekFrom = 'Mo'|'Su';
export interface ICalendarServiceState{
  currentDate: Date;
  changeDate: Date;
  min: Date|null;
  max: Date|null;
  isDisablePrev: boolean;
  isDisableNext: boolean;
}
export interface ICreateCalendar{
  type: TypeOfCalendar;
  isShowWeekend: boolean;
  isColorHolidays: boolean;
  startWeekFrom: TypeStartWeekFrom;
  dates: IDate[];
  date: Date;
  handlePrevDate: () => void,
  handleNextDate: () => void,
  isDisablePrev: boolean;
  isDisableNext: boolean;
  min: Date|null;
  max: Date|null;
  handleSearchCalendar: (searchDate: Date) => void;
  currentDate: Date;
  loading: boolean;
}
export interface ILimitDate{
  min?: string;
  max?: string;
}
export type IServiceCalendar = Pick<Partial<ICreateCalendar>, 'type'|'isShowWeekend'|'startWeekFrom'|'isColorHolidays'> & ILimitDate;
export type ICalendar = Required<ICreateCalendar>
export interface IHolidays{
  date: string;
  localName: string;
  name: string;
  countryCode: string;
}
export interface INote{
  text: string;
  id: number;
}
export interface IYearDate{
  dates: IDate[];
  date: Date;
}