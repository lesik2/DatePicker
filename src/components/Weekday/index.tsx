import {JSX} from 'react'
import { WEEKDAY } from '@constants/index';

import { WeekDayCell, WeekDayText, Wrapper } from './styled'

export function Weekday(): JSX.Element {
  return (
    <Wrapper>
      {WEEKDAY.map((day)=>(
        <WeekDayCell key={day}>
          <WeekDayText>
            {day}
          </WeekDayText>
        </WeekDayCell>
      ))}
    </Wrapper>
  )
}
