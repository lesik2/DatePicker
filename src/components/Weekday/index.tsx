import {JSX} from 'react'
import { WEEKDAY_FROM_MO } from '@constants/index';

import { WeekDayCell, WeekDayText, Wrapper } from './styled'

export function Weekday(): JSX.Element {
  return (
    <Wrapper>
      {WEEKDAY_FROM_MO.map((day)=>(
        <WeekDayCell key={day}>
          <WeekDayText>
            {day}
          </WeekDayText>
        </WeekDayCell>
      ))}
    </Wrapper>
  )
}
