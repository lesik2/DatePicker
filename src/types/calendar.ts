import { IColor, IDate, ISize, TypeOfCalendar, TypeStartWeekFrom } from "./models";

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
  color: IColor;
  size: ISize;
  defaultRange: boolean,
}
export interface ICalendarServiceState{
  currentDate: Date;
  changeDate: Date;
  min: Date|null;
  max: Date|null;
  isDisablePrev: boolean;
  isDisableNext: boolean;
}
export interface ILimitDate{
  min?: string;
  max?: string;
}
export type IServiceCalendar = Pick<Partial<ICreateCalendar>,
'type'|'isShowWeekend'|'startWeekFrom'|'isColorHolidays'|'color'|'size'|'defaultRange'> & ILimitDate;