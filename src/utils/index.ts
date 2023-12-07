import { IDate, IHolidays, TypeStartWeekFrom } from "../types/index";


export const indexesOfWeekends = {
  'Sa':6,
  'Su': 0,
  'lastIndexOfWeek': 7,
}

export const getDaysForCurrentMonth = (
  totalDaysInMonth: number, 
  startOfMonth: Date,
  calendarDates: IDate[],
  currentDay: number,
  select: boolean,
  ): void => {
  for (let i = 1; i <= totalDaysInMonth; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: currentDay === i && select? 'selected':'default',
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
    startDayOfWeek = (startDayOfWeek + indexesOfWeekends.lastIndexOfWeek-1) % 7;
  }

  let dateNumber: number = prevMonthDays - startDayOfWeek + 1;
  for (let i = 0; i < startDayOfWeek; i += 1) {
    calendarDates.push({
      dateNumber,
      type: 'disabled',
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

  const remainingDays: number =  startWeekFrom === 'Mo'?
  indexesOfWeekends.lastIndexOfWeek - endDayOfWeek: 
  indexesOfWeekends.lastIndexOfWeek-1 - endDayOfWeek

  for (let i = 1; i <= remainingDays; i += 1) {
    calendarDates.push({
      dateNumber: i,
      type: 'disabled',
    });
  }
}

export function isCurrentDate(currentDate: Date, changeDate: Date): boolean{
  return currentDate.getMonth() === changeDate.getMonth() && 
  currentDate.getFullYear() === changeDate.getFullYear()
}

export function getCalendarDates(
  changeDate: Date, startWeekFrom: TypeStartWeekFrom, currentDate: Date
  ): IDate[] {
  const calendarDates: IDate[] = [];

  const year = changeDate.getFullYear();
  const month = changeDate.getMonth();
  const startOfMonth: Date = new Date(year, month, 1);
  const endOfMonth: Date = new Date(year, month + 1, 0);
  const prevMonthEndDate: Date = new Date(year, month, 0);

  getDaysForPrevMonth(startOfMonth,prevMonthEndDate.getDate(),calendarDates, startWeekFrom);
  getDaysForCurrentMonth(
    endOfMonth.getDate(), 
    startOfMonth, 
    calendarDates, 
    currentDate.getDate(), 
    isCurrentDate(currentDate, changeDate)
    );
  getDaysForNextMonth(startWeekFrom,endOfMonth, calendarDates);

  return calendarDates;
}



export function removeWeekdayDates(dates: IDate[],startWeekFrom: TypeStartWeekFrom ): IDate[]{
  const datesWithoutWeekend: IDate[] = [];
  for(let i=0;i<dates.length;i+=7){
    let week = dates.slice(i, i+7);
    week = startWeekFrom === 'Mo'?week.slice(0,5): week.slice(1,6);
    datesWithoutWeekend.push(...week);
  }

  return datesWithoutWeekend;
}

export const changeTypeOfCalendarToWeek = (
   dates: IDate[],
   date: Date, 
   startWeekFrom: 
   TypeStartWeekFrom
   ): IDate[] => {
  const numberOfDate = date.getDate();
  const dayOfWeek = date.getDay();
  const week: IDate[] = [];

  const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), numberOfDate - dayOfWeek);
  if (startWeekFrom === 'Su') {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate()-1)
  } 
  
  const matchingDateIndex = dates.findIndex((item) =>item.dateNumber === firstDayOfWeek.getDate());

  if (matchingDateIndex !== -1) {
    week.push(...dates.slice(matchingDateIndex, matchingDateIndex + 7));
  }

  return week;
};

export const colorHolidays = (holidays: IHolidays[], dates: IDate[], date: Date): IDate[] => {
  const holidayDates = [...dates];
  const currentHolidays = holidays.filter((holiday)=>{
    const holidayDate = new Date(holiday.date);

    return holidayDate.getMonth() === date.getMonth()
  })

  currentHolidays.forEach((holiday)=>{
    const holidayDate = new Date(holiday.date);

    const dateIndex = holidayDates.findIndex((item)=>item.dateNumber === holidayDate.getDate());

    if(dateIndex !== -1){
      holidayDates[dateIndex].type = 'holiday';
    }
  })

  return holidayDates;
}

export const disableMinDates = (dates: IDate[], minDate: Date|null): IDate[]=>{
  let  newDates = [...dates];
  if(minDate){
    newDates = newDates.map((date)=>{
      if(date.dateNumber<minDate.getDate()){
        return {...date, type:'disabled'}
      }

      return date;
    })
  }


  return newDates;
}

export const disableMaxDates = (dates: IDate[], maxDate: Date|null): IDate[]=>{
  let newDates = [...dates];
  if(maxDate){
    newDates = newDates.map((date)=>{
      if(date.dateNumber>maxDate.getDate()){
        return {...date, type:'disabled'}
      }

      return date;
    })
  }

  return newDates;
}

export const rangeDates = (dates: IDate[], start: number, end: number): IDate[]=>{
  let newDates = [...dates];
  newDates = newDates.map((date)=>{
    if(date.type === 'disabled'){
      return date;
    }

    if(date.dateNumber>start && date.dateNumber < end){
      return {...date, type:'between'}
    }

    if(date.dateNumber === end){
      return {...date, type:'end'}
    }

    return date;
  })

  return newDates;
}