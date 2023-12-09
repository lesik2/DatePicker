import {JSX, useState, useEffect} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'
import { DateInput } from '@components/DateInput/index'

import { Wrapper,CalendarWrapper } from './styled'

import {rangeDates} from '../../utils/index'
import { ClearButton } from '../ClearButton'
import { ICreateCalendar, IDate } from '../../types/index'
import { InfinityLoader } from '../InfinityLoader'

export function Calendar({
  dates, date, startWeekFrom, isShowWeekend, handleNextDate, 
  handlePrevDate, isDisableNext, isDisablePrev, handleSearchCalendar,loading, isColorHolidays
}: ICreateCalendar): JSX.Element {
  
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });

  const [datesOfCalendar, setDatesOfCalendar] = useState<IDate[]>(dates);
  const [amountOfClicks, setAmountOfClicks] = useState(0);
  const [start, setStart]  = useState(-1);
  const [end, setEnd] = useState(-1);


  const incrementOfClicks = (numberOfDate: number) => {
    if(amountOfClicks+1 === 1){
      setStart(numberOfDate)
      setAmountOfClicks((prev)=>prev+1)
    }else if(amountOfClicks+1 === 2 && numberOfDate> start){
      setEnd(numberOfDate);
      setAmountOfClicks((prev)=>prev+1)
    }
  }

  const handleClear = () => {
    setStart(-1);
    setEnd(-1);
    setAmountOfClicks(0);
    const clearDates: IDate[] = datesOfCalendar.map((item)=>{
      if(item.type === 'start' || item.type ==='end' || item.type === 'between'){
        return {...item, type: 'default'}
      }

      return item
    })

    setDatesOfCalendar(clearDates)
  }

  useEffect(()=>{
    if(start > 0 && end>0){
      setDatesOfCalendar(rangeDates(datesOfCalendar, start,end));
    }
    else if(start >0){
      const startDates: IDate[] = datesOfCalendar.map((item)=>{
        if(item.type === 'disabled' || item.type === 'selected'){
          return item;
        }

        if(item.dateNumber === start){
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
      <DateInput  handleSearchCalendar={handleSearchCalendar}/>
      <CalendarWrapper $clear={start>0}>
          <Navigation
            year={year} 
            month={month} 
            handleNextDate={handleNextDate} 
            handlePrevDate={handlePrevDate}
            isDisableNext={isDisableNext}
            isDisablePrev={isDisablePrev}
            
          />
          <Weekday startWeekFrom={startWeekFrom} showHolidays={isShowWeekend}/>
          {!loading && isColorHolidays ?<InfinityLoader />: 
            <Main showHolidays={isShowWeekend}>
                {datesOfCalendar.map((dateItem, index)=>(
                  <DateCell 
                    // eslint-disable-next-line react/no-array-index-key
                    key={index} 
                    {...dateItem} date={date} 
                    incrementOfClicks={incrementOfClicks}
                  />
                ))}
            </Main>
          }
          
      </CalendarWrapper>
      {start > 0 && <ClearButton handleClear={handleClear}/>}
    </Wrapper>
    
  )
}
