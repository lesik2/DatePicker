import { IDate, TypeStartWeekFrom } from "@customTypes/models";
import {DATE_CONSTANTS} from '@constants/index'
import { isCurrentDate } from "@utils/index";

export const getDaysForPrevMonth = (
  calendarDates: IDate[],
  startOfMonth: Date, 
  lastDateOfPrevMonth: number, 
  startWeekFrom: TypeStartWeekFrom ): void => {
  let startDayOfWeek: number = startOfMonth.getDay();
  if (startWeekFrom === 'Mo') {
    startDayOfWeek = (startDayOfWeek + DATE_CONSTANTS.LAST_INDEX_OF_WEEK) % DATE_CONSTANTS.DAYS_IN_WEEK;
  }

  let dateNumber: number = lastDateOfPrevMonth - startDayOfWeek + 1;
  for (let i = 0; i < startDayOfWeek; i += 1) {
    calendarDates.push({
      dateNumber,
      type: 'disabled',
    });
    dateNumber += 1;
  }
}

export const getDaysForCurrentMonth = (
  calendarDates: IDate[],
  totalDaysInMonth: number, 
  currentDay: number,
  select: boolean,
  ): void => {
  for (let i = 1; i <= totalDaysInMonth; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: currentDay === i && select? 'selected':'default',
    });
  }
}

export const getDaysForNextMonth = (
  calendarDates: IDate[],
  startWeekFrom: TypeStartWeekFrom, 
  endOfMonth: Date,
  ): void => {
  let endDayOfWeek: number = endOfMonth.getDay();
  if (startWeekFrom === 'Mo' && endDayOfWeek === 0) {
    endDayOfWeek = DATE_CONSTANTS.DAYS_IN_WEEK;
  }

  const remainingDays: number =  startWeekFrom === 'Mo'?
  DATE_CONSTANTS.DAYS_IN_WEEK - endDayOfWeek: 
  DATE_CONSTANTS.DAYS_IN_WEEK-endDayOfWeek-1;

  for (let i = 1; i <= remainingDays; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: 'disabled',
    });
  }
}



export function getCalendarDates(
  changeDate: Date, startWeekFrom: TypeStartWeekFrom, currentDate: Date
  ): IDate[] {
  const calendarDates: IDate[] = [];

  const year = changeDate.getFullYear();
  const month = changeDate.getMonth();
  const startOfMonth: Date = new Date(year, month, 1);
  const endOfMonth: Date = new Date(year, month + 1, 0);
  const lastDateOfPrevMonth: number = new Date(year, month, 0).getDate();

  getDaysForPrevMonth(calendarDates,startOfMonth,lastDateOfPrevMonth,startWeekFrom);
  getDaysForCurrentMonth(
    calendarDates, 
    endOfMonth.getDate(), 
    currentDate.getDate(), 
    isCurrentDate(currentDate, changeDate)
    );
  getDaysForNextMonth(calendarDates,startWeekFrom,endOfMonth);

  return calendarDates;
}

