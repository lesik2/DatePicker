import {JSX} from 'react'

import { WeekDayCell, WeekDayText, Wrapper } from './styled'

import { TypeStartWeekFrom } from '../../types/index'
import {WEEKDAY_FROM_MO, WEEKDAY_FROM_SU} from '../../constants/index'

export interface IWeekday{
  startWeekFrom: TypeStartWeekFrom;
  showHolidays: boolean;
}
export function Weekday({startWeekFrom, showHolidays}: IWeekday): JSX.Element {
  let weekday = startWeekFrom === 'Mo'?WEEKDAY_FROM_MO:WEEKDAY_FROM_SU;

  weekday = showHolidays?weekday: weekday.filter((day)=>day!=='Sa' && day !=='Su');

  return (
    <Wrapper>
      {weekday.map((day)=>(
        <WeekDayCell $showHolidays = {showHolidays} key={day}>
          <WeekDayText>
            {day}
          </WeekDayText>
        </WeekDayCell>
      ))}
    </Wrapper>
  )
}
