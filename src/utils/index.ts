import { IDate, TypeStartWeekFrom } from "../types/index";


export const indexesOfWeekends = {
  'Sa':6,
  'Su': 0,
  'lastIndexOfWeek': 6,
}

export const getDaysForCurrentMonth = (
  totalDaysInMonth: number, 
  startOfMonth: Date,
  calendarDates: IDate[],
  currentDay: number,
  ): void => {
  for (let i = 1; i <= totalDaysInMonth; i += 1) {
    const currentDate = startOfMonth.getDay();
    calendarDates.push({
      dateNumber: i,
      type: currentDay === i? 'selected':'default',
      weekend: currentDate === indexesOfWeekends.Sa || currentDate === indexesOfWeekends.Su,
    });
    startOfMonth.setDate(i+1);
  }
}

export const getDaysForPrevMonth = (
  startOfMonth: Date, 
  prevMonthDays: number, 
  calendarDates: IDate[],
  startWeekFrom: TypeStartWeekFrom ): void => {
  let startDayOfWeek: number = startOfMonth.getDay();
  if (startWeekFrom === 'Mo') {
    startDayOfWeek = (startDayOfWeek + indexesOfWeekends.lastIndexOfWeek) % 7;
  }

  let dateNumber: number = prevMonthDays - startDayOfWeek + 1;
  for (let i = 0; i < startDayOfWeek; i += 1) {
    calendarDates.push({
      dateNumber,
      type: 'disabled',
      weekend: i=== indexesOfWeekends.Sa-1,
    });
    dateNumber += 1;
  }
}

export const getDaysForNextMonth = (
  startWeekFrom: TypeStartWeekFrom, 
  endOfMonth: Date,
  calendarDates: IDate[]
  ): void => {
  let endDayOfWeek: number = endOfMonth.getDay();
  if (startWeekFrom === 'Mo' && endDayOfWeek === 0) {
    endDayOfWeek = indexesOfWeekends.lastIndexOfWeek;
  }

  const remainingDays: number =  indexesOfWeekends.lastIndexOfWeek - endDayOfWeek;
  for (let i = 1; i <= remainingDays; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: 'disabled',
      weekend: i===indexesOfWeekends.Sa-1 || i===indexesOfWeekends.lastIndexOfWeek,
    });
  }
}

export function getCalendarDates(
  currentDate: Date, startWeekFrom: TypeStartWeekFrom
  ): IDate[] {
  const calendarDates: IDate[] = [];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const startOfMonth: Date = new Date(year, month, 1);
  const endOfMonth: Date = new Date(year, month + 1, 0);
  const prevMonthEndDate: Date = new Date(year, month, 0);

  getDaysForPrevMonth(startOfMonth,prevMonthEndDate.getDate(),calendarDates, startWeekFrom);
  getDaysForCurrentMonth(endOfMonth.getDate(), startOfMonth, calendarDates, currentDate.getDate());
  getDaysForNextMonth(startWeekFrom,endOfMonth, calendarDates);

  return calendarDates;
}


export function removeWeekdayDates(dates: IDate[]): IDate[]{
  return dates.filter((date)=>!date.weekend)
}

export const changeTypeOfCalendarToWeek = (dates: IDate[], ): IDate[]=>{
  const week: IDate[] =[];
  for(let i=0;i<dates.length;i+=7){
    const arr = dates.slice(i,i+7);
    if(arr.some((date)=>date.type === 'selected')){
      week.push(...arr);
      break;
    }
  }

  return week.length>0?week: dates.slice(0,7);
}