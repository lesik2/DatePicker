import {JSX} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'

import { Wrapper } from './styled'

import { ICreateCalendar } from '../../types/index'

export function Calendar({
  dates, date, startWeekFrom, isShowHolidays
}: ICreateCalendar): JSX.Element {
  const year = date?date.getFullYear(): 1;
  const month = date? date.toLocaleString('default', { month: 'long' }): '';
  const startWeek  = startWeekFrom?? 'Mo'
  const showHolidays = isShowHolidays?? true;

  return (
    <Wrapper>
      <Navigation year={year} month={month}/>
      <Weekday startWeekFrom={startWeek} showHolidays={showHolidays}/>
      {
        dates && 
        <Main showHolidays={showHolidays}>
          {dates.map((dateItem, index)=>(
            // eslint-disable-next-line react/no-array-index-key
            <DateCell key={index} {...dateItem}/>
          ))}
        </Main>
      }
    </Wrapper>
  )
}
