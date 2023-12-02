import {JSX} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'

import { Wrapper } from './styled'

import { getCalendarDates } from '../../utils/index';

export function Calendar(): JSX.Element {
  const currentDate: Date = new Date();
  const year = currentDate.getFullYear();
  const month  = currentDate.getMonth();

  return (
    <Wrapper>
      <Navigation />
      <Weekday />
      <Main>
        {getCalendarDates(year, month).map((date, index)=>(
          // eslint-disable-next-line react/no-array-index-key
          <DateCell key={index} {...date}/>
        ))}
      </Main>
    </Wrapper>
  )
}
