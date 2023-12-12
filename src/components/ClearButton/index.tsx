import {JSX} from 'react'

import { ClearBtn } from './styled'

import { ISize } from '@//types';

export interface IClearButton{
  handleClear: () => void;
  size: ISize;
}
export function ClearButton({handleClear, size}: IClearButton): JSX.Element {
  const handleClick = () => {
    handleClear();
  }

  return (
    <ClearBtn $size={size} onClick={handleClick}>
      Clear
    </ClearBtn>
  )
}