import {JSX} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'

import { Wrapper } from './styled'

import { ICreateCalendar } from '../../types/index'

export function Calendar({
  dates, date, startWeekFrom, isShowHolidays, handleNextDate, handlePrevDate
}: ICreateCalendar): JSX.Element {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <Wrapper>
      <Navigation
        year={year} 
        month={month} 
        handleNextDate={handleNextDate} 
        handlePrevDate={handlePrevDate}
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
    </Wrapper>
  )
}
