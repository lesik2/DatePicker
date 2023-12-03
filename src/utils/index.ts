import { IDate } from "../types/index";

export function getCalendarDates(year: number, month: number): IDate[] {
  const calendarDates: IDate[] = [];
  const startOfMonth: Date = new Date(year, month, 1);
  const endOfMonth: Date = new Date(year, month + 1, 0);

  let startDayOfWeek: number = startOfMonth.getDay();
  if(startDayOfWeek!== 1){
    startDayOfWeek = startDayOfWeek === 0?7:startDayOfWeek;
    const endOfPrevMonth: Date = new Date(year,month,0);
    for(let i=0;i<startDayOfWeek-1;i+=1){
      const dateNumber: number = endOfPrevMonth.getDate() - startDayOfWeek + 2 + i;
      calendarDates.push({ dateNumber, type: 'disabled' });
    }
  }

  while (startOfMonth <= endOfMonth) {
    const dateNumber: number = startOfMonth.getDate();
    calendarDates.push({ dateNumber, type: 'default' });
    startOfMonth.setDate(startOfMonth.getDate() + 1);
  }
  
  const endDayOfWeek: number = endOfMonth.getDay();
  if(endDayOfWeek !==0){
    for (let i = 0; i < 7 - endDayOfWeek; i += 1) {
      const dateNumber: number = i + 1;
      calendarDates.push({ dateNumber, type: 'disabled' });
    }
  }

  return calendarDates;
}

export function getDatesStartWithSunday(dates: IDate[]): IDate[] {
  const adjustedDates = [...dates];

  for (let i= 0; i < adjustedDates.length / 7; i+=1) {
    const sundayIndex = i * 7 + 6;
    const sunday = adjustedDates.splice(sundayIndex, 1)[0];
    adjustedDates.unshift(sunday);
  }

  return adjustedDates;
}