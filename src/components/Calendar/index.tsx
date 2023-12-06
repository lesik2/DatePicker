import {JSX} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'
import { DateInput } from '@components/DateInput/index'

import { Wrapper,CalendarWrapper } from './styled'

import { ICreateCalendar } from '../../types/index'

export function Calendar({
  dates, date, startWeekFrom, isShowHolidays, handleNextDate, 
  handlePrevDate, isDisableNext, isDisablePrev
}: ICreateCalendar): JSX.Element {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });

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
              {dates.map((dateItem, index)=>(
                // eslint-disable-next-line react/no-array-index-key
                <DateCell key={index} {...dateItem}/>
              ))}
            </Main>
          }
      </CalendarWrapper>
    </Wrapper>
    
  )
}
