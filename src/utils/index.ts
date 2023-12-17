import { IDate } from "@customTypes/models";


export function isCurrentDate(currentDate: Date, changeDate: Date): boolean{
  return currentDate.getMonth() === changeDate.getMonth() && 
  currentDate.getFullYear() === changeDate.getFullYear()
}

export const isSearchValid = (
  changeDate: Date, searchDate: Date, minDate: Date| null,maxDate: Date| null
  ): boolean => {
  if(isCurrentDate(searchDate, changeDate)){
      return false;
  }

  if(minDate && searchDate.getTime() < minDate.getTime()){
    return false;
  }

  if(maxDate && searchDate.getTime() > maxDate.getTime()){
    return false;
  }

  return true;
}

export const rangeDates = (dates: IDate[], start: Date, end: Date, currentDate: Date): IDate[]=>{
  let newDates = [...dates];
  newDates = newDates.map((date)=>{
    if(date.type === 'disabled' || date.type === 'selected'){
      return date;
    }

    if(date.dateNumber === start.getDate()&& isCurrentDate(currentDate, start)){
      return {...date, type: 'start'};
    }

    if(date.dateNumber === end.getDate()&& isCurrentDate(currentDate, end)){

      return {...date, type:'end'}
    }

    if(!isCurrentDate(currentDate, start)&& !isCurrentDate(currentDate, end)){
      return {...date, type:'between'}
    }

    if(isCurrentDate(currentDate, start)
    && !isCurrentDate(currentDate, end) && date.dateNumber>start.getDate()){
        return {...date, type:'between'};
    }

    if(!isCurrentDate(currentDate, start)
    && isCurrentDate(currentDate, end)&& date.dateNumber<end.getDate()){
        return {...date, type:'between'};
    }

    if(date.dateNumber>start.getDate()&&date.dateNumber<end.getDate()){
      return {...date, type:'between'};
    }
 
    return date;
  })

  
  return newDates;
  
}

