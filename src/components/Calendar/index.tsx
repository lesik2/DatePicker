import {JSX, useState, useEffect} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'
import { DateInput } from '@components/DateInput/index'
import { clearStartDate, getStartDate, saveStartDate } from '@utils/rangePicker'

import { Wrapper,CalendarWrapper } from './styled'

import {rangeDates} from '../../utils/index'
import { ClearButton } from '../ClearButton'
import { ICreateCalendar, IDate } from '../../types/index'
import { InfinityLoader } from '../InfinityLoader'


export function Calendar({
  dates, date, startWeekFrom, isShowWeekend, handleNextDate, 
  handlePrevDate, isDisableNext, isDisablePrev, handleSearchCalendar,loading, isColorHolidays,
  color, size
}: ICreateCalendar): JSX.Element {
  
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const defineAmountOfClicks=(): number => {
    const startDate = getStartDate('start') === null?0:1;
    const endDate = getStartDate('end') === null?0:1;

    return startDate+ endDate;
  }

  const [datesOfCalendar, setDatesOfCalendar] = useState<IDate[]>(dates);
  const [amountOfClicks, setAmountOfClicks] = useState(defineAmountOfClicks());
  const [start, setStart]  = useState<Date|null>(getStartDate('start'));
  const [end, setEnd] = useState<Date| null>(getStartDate('end'));

 

  const incrementOfClicks = (numberOfDate: number) => {
    if(amountOfClicks+1 === 1){
      const startDate = new Date(year, date.getMonth(), numberOfDate);
      setStart(startDate)
      saveStartDate(startDate.toString(), 'start');
      setAmountOfClicks((prev)=>prev+1)
    }else if(amountOfClicks+1 === 2 && start){
      const endDate = new Date(year, date.getMonth(), numberOfDate);
      if(endDate.getTime()>start?.getTime()){
        setEnd(endDate);
        saveStartDate(endDate.toString(), 'end');
        setAmountOfClicks((prev)=>prev+1)
      }

    }
  }

  const handleClear = () => {
    setStart(null);
    setEnd(null);
    setAmountOfClicks(0);
    clearStartDate();
    const clearDates: IDate[] = datesOfCalendar.map((item)=>{
      if(item.type === 'start' || item.type ==='end' || item.type === 'between'){
        return {...item, type: 'default'}
      }

      return item
    })

    setDatesOfCalendar(clearDates)
  }

  useEffect(()=>{
    if(start && end){
      if(date.getTime()>start.getTime() && date.getTime()<end.getTime()){
        setDatesOfCalendar(rangeDates(datesOfCalendar, start,end, date));
      }
    }
    else if(start){
      const startDates: IDate[] = datesOfCalendar.map((item)=>{
        if(item.type === 'disabled' || item.type === 'selected'){
          return item;
        }

        if(item.dateNumber === start.getDate()
        && start.getFullYear()===year
        && start.getMonth() === date.getMonth()){
          return {...item, type: 'start'};
        }

        return item;
      })

      setDatesOfCalendar(startDates);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end])
  
  return (
    <Wrapper>
      <DateInput size={size} handleSearchCalendar={handleSearchCalendar}/>
      <CalendarWrapper $size={size} $clear={start !==null}>
          <Navigation
            year={year} 
            month={month} 
            handleNextDate={handleNextDate} 
            handlePrevDate={handlePrevDate}
            isDisableNext={isDisableNext}
            isDisablePrev={isDisablePrev}
            size={size}
            
          />
          <Weekday size={size} startWeekFrom={startWeekFrom} showHolidays={isShowWeekend}/>
          {!loading && isColorHolidays ?<InfinityLoader color={color} />: 
            <Main size={size}  showHolidays={isShowWeekend}>
                {datesOfCalendar.map((dateItem, index)=>(
                  <DateCell 
                    // eslint-disable-next-line react/no-array-index-key
                    key={index} 
                    {...dateItem} date={date} 
                    incrementOfClicks={incrementOfClicks}
                    color={color}
                    size={size}
                  />
                ))}
            </Main>
          }
          
      </CalendarWrapper>
      {start && <ClearButton size={size} handleClear={handleClear}/>}
    </Wrapper>
    
  )
}
