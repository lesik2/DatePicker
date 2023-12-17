import {JSX, memo} from 'react'

import { WeekDayCell, WeekDayText, Wrapper } from './styled'

import {IWeekday} from '../../types/index'
import {WEEKDAY_FROM_MO, WEEKDAY_FROM_SU} from '../../constants/index'


export const Weekday =  memo(({startWeekFrom, showHolidays, size}: IWeekday): JSX.Element => {
  const weekday = startWeekFrom === 'Mo'?WEEKDAY_FROM_MO:WEEKDAY_FROM_SU;

  const weekdayHolidays= showHolidays?weekday: weekday.filter((day)=>day!=='Sa' && day !=='Su');

  return (
    <Wrapper data-testid='weekday' $size={size}>
      {weekdayHolidays.map((day)=>(
        <WeekDayCell $size={size} $showHolidays = {showHolidays} key={day}>
          <WeekDayText $size={size}>
            {day}
          </WeekDayText>
        </WeekDayCell>
      ))}
    </Wrapper>
  )
})
