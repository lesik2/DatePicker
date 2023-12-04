import { IDate, TypeStartWeekFrom } from "../types/index";




// eslint-disable-next-line max-len
export function getCalendarDates(year: number, month: number, startWeekFrom: TypeStartWeekFrom): IDate[] {
  const calendarDates: IDate[] = [];
  const startDate: Date = new Date(year, month, 1);
  const endDate: Date = new Date(year, month + 1, 0);

  let startDayOfWeek: number = startDate.getDay();
  if (startWeekFrom === 'Mo') {
    startDayOfWeek = (startDayOfWeek + 6) % 7;
  }

  const prevMonthEndDate: Date = new Date(year, month, 0);
  const prevMonthDays: number = prevMonthEndDate.getDate();

  let dateNumber: number = prevMonthDays - startDayOfWeek + 1;

  for (let i = 0; i < startDayOfWeek; i += 1) {
    calendarDates.push({
      dateNumber,
      type: 'disabled',
      weekend: i===5,
    });
    dateNumber += 1;
  }

  const totalDaysInMonth: number = endDate.getDate();
  for (let i = 1; i <= totalDaysInMonth; i += 1) {
    const currentDate = startDate.getDay();
    calendarDates.push({
      dateNumber: i,
      type: 'default',
      weekend: currentDate===0 || currentDate === 6,
    });
    startDate.setDate(i+1);
  }

  let endDayOfWeek: number = endDate.getDay();
  if (startWeekFrom === 'Mo' && endDayOfWeek === 0) {
    endDayOfWeek = 6;
  }

  const remainingDays: number = startWeekFrom === 'Mo' ? 6 - endDayOfWeek : 6 - endDayOfWeek;
  for (let i = 1; i <= remainingDays; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: 'disabled',
      weekend: i===5 || i===6,
    });
  }

  return calendarDates;
}

export function removeWeekdayDates(dates: IDate[]): IDate[]{
  return dates.filter((date)=>!date.weekend)
}