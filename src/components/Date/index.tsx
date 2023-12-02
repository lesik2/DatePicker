import {JSX} from 'react'
import { IDate } from '@customTypes/index';

import { DateWrapper, NumberOfDate } from './styled';

export function DateCell({type,dateNumber }: IDate): JSX.Element{
  return (
    <DateWrapper $type={type} disabled={type==='disabled'}>
      <NumberOfDate $type={type}>
        {dateNumber}
      </NumberOfDate>
    </DateWrapper>

  )
}
