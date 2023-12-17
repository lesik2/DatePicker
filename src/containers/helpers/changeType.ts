import { IDate, IYearDate, TypeStartWeekFrom } from "@customTypes/models";
import { DATE_CONSTANTS } from "@constants/index";

import { getCalendarDates } from "./defaultCalendar";

export const changeTypeOfCalendarToYear = (
  currentYear: number, startWeekFrom: TypeStartWeekFrom, currentDate: Date
): IYearDate[] => {
  const yearDates: IYearDate[] = [];

  for (let i = 0; i < DATE_CONSTANTS.MONTH_IN_YEAR; i += 1) {
    const yearDate = new Date(currentYear, i, 1);
    const dates = getCalendarDates(yearDate, startWeekFrom, currentDate);
    yearDates.push({
      dates,
      date: yearDate,
    });
  }

  return yearDates;
};

export const changeTypeOfCalendarToWeek = (
    dates: IDate[],
    changeDate: Date, 
    startWeekFrom: TypeStartWeekFrom
    ): IDate[] => {
  const numberOfDate = changeDate.getDate();
  const dayOfWeek = changeDate.getDay();
  const week: IDate[] = [];

  const firstDayOfWeek = new Date(
    changeDate.getFullYear(), changeDate.getMonth(), numberOfDate - dayOfWeek+1
    );

  if (startWeekFrom === 'Su') {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate()-1)
  } 
  
  const matchingDateIndex = dates.findIndex((item) =>item.dateNumber === firstDayOfWeek.getDate());

  if (matchingDateIndex !== -1) {
    week.push(...dates.slice(matchingDateIndex, matchingDateIndex + DATE_CONSTANTS.DAYS_IN_WEEK));
  }

  return week;
};