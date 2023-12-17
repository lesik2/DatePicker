import { Dispatch } from "react";

import { IColor, IDate, ISize, TypeStartWeekFrom } from "./models";

export interface IDateCell{
  date: Date;
  incrementOfClicks: (numberOfDate: number) => void;
  color: IColor;
  size: ISize;
}
export type IDateComponent = IDate & IDateCell;


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
export interface IClearButton{
  handleClear: () => void;
  size: ISize;
}
export interface IMain{
  children: JSX.Element|JSX.Element[];
  showHolidays: boolean;
  size: ISize;
}