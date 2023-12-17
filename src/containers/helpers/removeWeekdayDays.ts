import { IDate, TypeStartWeekFrom } from "@customTypes/models";
import {DATE_CONSTANTS} from '@constants/index'

export function removeWeekdayDays(dates: IDate[],startWeekFrom: TypeStartWeekFrom ): IDate[]{
  const datesWithoutWeekend: IDate[] = [];
  for(let i=0;i<dates.length;i+=DATE_CONSTANTS.DAYS_IN_WEEK){
    let week = dates.slice(i, i+DATE_CONSTANTS.DAYS_IN_WEEK);
    week = startWeekFrom === 'Mo'?week.slice(0,5): week.slice(1,6);
    datesWithoutWeekend.push(...week);
  }

  return datesWithoutWeekend;
}