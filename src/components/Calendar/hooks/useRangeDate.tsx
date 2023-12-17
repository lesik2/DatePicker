
import { IDate } from '@customTypes/models';
import { rangeDates } from '@utils/index';
import { useEffect,Dispatch } from 'react';

export function useRangeDate(
  start: Date|null, end: Date|null, changeDate: Date,
  datesOfCalendar: IDate[],setDatesOfCalendar: Dispatch<React.SetStateAction<IDate[]>>
  ): void{
  useEffect(()=>{
    if(start && end){
      const currentDate = new Date(changeDate.getFullYear(), changeDate.getMonth()+1,0);
      if(changeDate.getTime()+ (currentDate.getDate()-changeDate.getDate())*86400000>start.getTime() 
      && changeDate.getTime()-changeDate.getDate()*86400000<end.getTime()){
        setDatesOfCalendar(rangeDates(datesOfCalendar, start,end, changeDate));
      }
    }
    else if(start){
      const startDates: IDate[] = datesOfCalendar.map((item)=>{
        if(item.type === 'disabled' || item.type === 'selected'){
          return item;
        }

        if(item.dateNumber === start.getDate()
        && start.getFullYear()===changeDate.getFullYear()
        && start.getMonth() === changeDate.getMonth()){
          return {...item, type: 'start'};
        }

        return item;
      })

      setDatesOfCalendar(startDates);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end])
}
