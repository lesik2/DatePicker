import {JSX, memo} from 'react'

import { WeekDayCell, WeekDayText, Wrapper } from './styled'

import { ISize, TypeStartWeekFrom } from '../../types/index'
import {WEEKDAY_FROM_MO, WEEKDAY_FROM_SU} from '../../constants/index'

export interface IWeekday{
  startWeekFrom: TypeStartWeekFrom;
  showHolidays: boolean;
  size: ISize;
}
export const Weekday =  memo(({startWeekFrom, showHolidays, size}: IWeekday): JSX.Element => {
  let weekday = startWeekFrom === 'Mo'?WEEKDAY_FROM_MO:WEEKDAY_FROM_SU;

  weekday = showHolidays?weekday: weekday.filter((day)=>day!=='Sa' && day !=='Su');

  return (
    <Wrapper $size={size}>
      {weekday.map((day)=>(
        <WeekDayCell $size={size} $showHolidays = {showHolidays} key={day}>
          <WeekDayText $size={size}>
            {day}
          </WeekDayText>
        </WeekDayCell>
      ))}
    </Wrapper>
  )
})
