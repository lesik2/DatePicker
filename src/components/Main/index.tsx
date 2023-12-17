import {JSX} from 'react'
import { IMain } from '@customTypes/index';

import { Wrapper } from './styled'


export function Main({children, showHolidays, size}: IMain): JSX.Element {
  return (
    <Wrapper data-testid='main' $showHolidays = {showHolidays} $size={size}>
      {children}
    </Wrapper>
  )
}
