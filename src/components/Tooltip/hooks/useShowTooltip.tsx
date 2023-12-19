
import { useEffect, Dispatch } from 'react';

export function useShowTooltip(
  isOpen: boolean, setIsOpen: Dispatch<React.SetStateAction<boolean>>
  ): void{
  useEffect(()=>{
    if(!isOpen) return ()=>{};
    
    const idTimer = setTimeout(()=> setIsOpen(false), 1800)

    return ()=>{
      clearTimeout(idTimer);
    }
  },[isOpen, setIsOpen])
}
