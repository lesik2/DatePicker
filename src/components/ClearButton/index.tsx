import {JSX} from 'react'

import { ClearBtn } from './styled'

export function ClearButton(): JSX.Element {
  const handleClick = () => {

  }

  return (
    <ClearBtn onClick={handleClick}>
      Clear
    </ClearBtn>
  )
}