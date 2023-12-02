import {JSX, ReactElement} from 'react'

import { Wrapper } from './styled'

export interface IMain{
  children: ReactElement[]
}
export function Main({children}: IMain): JSX.Element {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
