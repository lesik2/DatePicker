import { memo} from 'react'
import { IClearButton } from '@customTypes/index';
import {CONSTANTS} from '@constants/index'

import { ClearBtn } from './styled'

export const ClearButton =  memo(({handleClear, size}: IClearButton) =>{
  const handleClick = () => {
    handleClear();
  }

  return (
    <ClearBtn data-testid="clear-btn" $size={size} onClick={handleClick}>
      {CONSTANTS.CLEAR_BUTTON}
    </ClearBtn>
  )
})