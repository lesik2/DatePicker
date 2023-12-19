import { IDate } from "@customTypes/models";
import { saveRangeDateToStorage } from "@utils/rangePicker";
import {DATE_CONSTANTS} from '@constants/index';

export const setRange = (week: IDate[], currentDate: Date): IDate[]=>{
  const newWeek = [...week];

  const startDate = new Date(
    currentDate.getFullYear(),currentDate.getMonth(),newWeek[0].dateNumber
    );

  const endDate = new Date(
    currentDate.getFullYear(),currentDate.getMonth(),newWeek[newWeek.length-1].dateNumber
  );

  for(let i=0;i<newWeek.length-1;i+=1){
    if(newWeek[i].type!=='selected' && newWeek[i].type !=='disabled'){
      if(i===0){
        newWeek[i].type = 'start';
      }
      else if(i===newWeek.length-1){
        newWeek[i].type = 'end';
      }
      else{
        newWeek[i].type = 'between'
      }

    }
  }

  saveRangeDateToStorage(startDate.toString(),'start');
  saveRangeDateToStorage(endDate.toString(),'end');

  return newWeek
}

export const defineDefaultRangePicker = (dates: IDate[], currentDate: Date): IDate[] =>{
  const newDates = [];
  for(let i=0;i<dates.length;i+=DATE_CONSTANTS.DAYS_IN_WEEK){
    const week = dates.slice(i,i+DATE_CONSTANTS.DAYS_IN_WEEK);
    if(week.some((day)=>day.dateNumber === currentDate.getDate())){
      newDates.push(...setRange(week, currentDate));
    }else{
      newDates.push(...week);
    }
  }

  return newDates;
}