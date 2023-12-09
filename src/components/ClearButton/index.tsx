import {JSX} from 'react'

import { ClearBtn } from './styled'

export interface IClearButton{
  handleClear: () => void;
}
export function ClearButton({handleClear}: IClearButton): JSX.Element {
  const handleClick = () => {
    handleClear();
  }

  return (
    <ClearBtn onClick={handleClick}>
      Clear
    </ClearBtn>
  )
}