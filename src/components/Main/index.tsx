import {JSX} from 'react'

import { Wrapper } from './styled'

export interface IMain{
  children: JSX.Element|JSX.Element[];
  showHolidays: boolean;
}
export function Main({children, showHolidays}: IMain): JSX.Element {
  return (
    <Wrapper $showHolidays = {showHolidays}>
      {children}
    </Wrapper>
  )
}
