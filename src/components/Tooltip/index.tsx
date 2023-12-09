import {JSX, Dispatch, useEffect} from 'react'

import { Wrapper, Text } from './styled';

export interface ITooltip{
  message: string;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}
export function Tooltip({message, isOpen, setIsOpen}: ITooltip): JSX.Element {
  useEffect(()=>{
    if(!isOpen) return;
    const idTimer = setTimeout(()=> setIsOpen(false), 2000)

    // eslint-disable-next-line consistent-return
    return ()=>{
      clearTimeout(idTimer);
    }
  },[isOpen, setIsOpen])

  return (
    <Wrapper $isOpen={isOpen}>
      <Text>
        {message}
      </Text>
    </Wrapper>
  )
}
