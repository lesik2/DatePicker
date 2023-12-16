import {JSX} from 'react'
import { IClearButton } from '@customTypes/index';
import {CONSTANTS} from '@constants/index'

import { ClearBtn } from './styled'

export function ClearButton({handleClear, size}: IClearButton): JSX.Element {
  const handleClick = () => {
    handleClear();
  }

  return (
    <ClearBtn data-testid="clear-btn" $size={size} onClick={handleClick}>
      {CONSTANTS.CLEAR_BUTTON}
    </ClearBtn>
  )
}