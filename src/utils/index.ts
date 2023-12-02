import { IDate } from "../types/index";

export function getCalendarDates(year: number, month: number): IDate[] {
  const startDate: Date = new Date(year, month, 1);
  const endDate: Date = new Date(year, month + 1, 0);
  const prevMonthEndDate: Date = new Date(year, month, 0);

  const calendarDates: IDate[] = [];
  const currentDay: Date = new Date(startDate);
  let startDayOfWeek: number = currentDay.getDay();
  if (startDayOfWeek === 0) {
    startDayOfWeek = 7;
  }

  for (let i = 0; i < startDayOfWeek - 1; i+=1) {
    const dateNumber: number = prevMonthEndDate.getDate() - startDayOfWeek + 2 + i;
    calendarDates.push({ dateNumber, type: 'disabled' });
  }

  while (currentDay <= endDate) {
    const dateNumber: number = currentDay.getDate();
    calendarDates.push({ dateNumber, type: 'default' });
    currentDay.setDate(currentDay.getDate() + 1);
  }
  
  while (calendarDates.length < 35) {
    const dateNumber: number = calendarDates.length - endDate.getDate() + 1;
    calendarDates.push({ dateNumber, type: 'disabled' });
  }

  return calendarDates;
}