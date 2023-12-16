import { Dispatch } from "react";

import { IColor, IDate, ISize, TypeOfCalendar, TypeStartWeekFrom } from "./models";

export interface IDateCell{
  date: Date;
  incrementOfClicks: (numberOfDate: number) => void;
  color: IColor;
  size: ISize;
}
export type IDateComponent = IDate & IDateCell;


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
  color: IColor;
  size: ISize;
  defaultRange: boolean,
}
export interface ILimitDate{
  min?: string;
  max?: string;
}
export type IServiceCalendar = Pick<Partial<ICreateCalendar>, 'type'|'isShowWeekend'|'startWeekFrom'|'isColorHolidays'|'color'|'size'|'defaultRange'> & ILimitDate;
export type ICalendar = Required<ICreateCalendar>

export interface IYearDate{
  dates: IDate[];
  date: Date;
}
export interface ITooltip{
  message: string;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}
export interface INavigation{
  month: string;
  year: number;
  handleNextDate?: () => void;
  handlePrevDate?: () => void;
  isDisablePrev: boolean;
  isDisableNext: boolean;
  size: ISize;
}
export interface IWeekday{
  startWeekFrom: TypeStartWeekFrom;
  showHolidays: boolean;
  size: ISize;
}
export interface IInfinityLoader{
  color: IColor;
}
export interface IDateInput{
  handleSearchCalendar: (searchDate: Date) => void;
  size: ISize;
}