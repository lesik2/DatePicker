import {JSX} from 'react'
import { IDate } from '@customTypes/index';

import { DateCell, NumberOfDate } from './styled';

export function Date({type,dateNumber }: IDate): JSX.Element{
  return (
    <DateCell $type={type} disabled={type==='disabled'}>
      <NumberOfDate $type={type}>
        {dateNumber}
      </NumberOfDate>
    </DateCell>

  )
}
