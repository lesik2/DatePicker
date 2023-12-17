
import { IDate } from '@customTypes/models';
import { isCurrentDate, rangeDates } from '@utils/index';
import { useEffect,Dispatch } from 'react';

export function useRangeDate(
  start: Date|null, end: Date|null, changeDate: Date,
  datesOfCalendar: IDate[],setDatesOfCalendar: Dispatch<React.SetStateAction<IDate[]>>
  ): void{
  useEffect(()=>{
    if(start && end){
        setDatesOfCalendar(rangeDates(datesOfCalendar, start,end, changeDate));
    }
    else if(start){
      const startDates: IDate[] = datesOfCalendar.map((item)=>{
        if(item.type === 'disabled' || item.type === 'selected'){
          return item;
        }

        if(item.dateNumber === start.getDate()&& isCurrentDate(start, changeDate)){
          return {...item, type: 'start'};
        }

        return item;
      })

      setDatesOfCalendar(startDates);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end])
}
