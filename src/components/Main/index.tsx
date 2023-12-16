import {JSX} from 'react'
import { ISize } from '@customTypes/models';

import { Wrapper } from './styled'

export interface IMain{
  children: JSX.Element|JSX.Element[];
  showHolidays: boolean;
  size: ISize;
}
export function Main({children, showHolidays, size}: IMain): JSX.Element {
  return (
    <Wrapper $showHolidays = {showHolidays} $size={size}>
      {children}
    </Wrapper>
  )
}
