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

export function Calendar({
  dates, date, startWeekFrom, isShowHolidays, handleNextDate, 
  handlePrevDate, isDisableNext, isDisablePrev
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

  useEffect(()=>{
    if(start > 0 && end>0){
      setDatesOfCalendar(rangeDates(datesOfCalendar, start,end));
    }
    else if(start >0){
      const startDates: IDate[] = datesOfCalendar.map((item)=>{
        if(item.dateNumber === start){
          return {...item, type: 'start'};
        }

        return item;
      })

      setDatesOfCalendar(startDates);
    }
  }, [start, end, datesOfCalendar])
  
  return (
    <Wrapper>
      <DateInput />
      <CalendarWrapper>
          <Navigation
            year={year} 
            month={month} 
            handleNextDate={handleNextDate} 
            handlePrevDate={handlePrevDate}
            isDisableNext={isDisableNext}
            isDisablePrev={isDisablePrev}
            
          />
          <Weekday startWeekFrom={startWeekFrom} showHolidays={isShowHolidays}/>
          {
            dates && 
            <Main showHolidays={isShowHolidays}>
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
      <ClearButton />
    </Wrapper>
    
  )
}
