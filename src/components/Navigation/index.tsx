import {JSX, memo} from 'react'
import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';

import { Icon, NavButton, Wrapper, Title } from './styled'

import { ISize } from '@//types';

export interface INavigation{
  month: string;
  year: number;
  handleNextDate?: () => void;
  handlePrevDate?: () => void;
  isDisablePrev: boolean;
  isDisableNext: boolean;
  size: ISize;
}
export const Navigation  = memo(({
  year, month, handleNextDate, handlePrevDate,isDisablePrev, isDisableNext, size
}: INavigation): JSX.Element => {
  const handleClickPrev = ()=>{
    if(handlePrevDate){
      handlePrevDate();
    }
  }

  const handleClickNext = ()=> {
  
    if(handleNextDate){
      handleNextDate();
    }
  }

  return (
    <Wrapper $size={size}>
      <NavButton disabled={isDisablePrev} $isDisabled={isDisablePrev} onClick={handleClickPrev}>
        <Icon $isDisabled={isDisablePrev}  alt='previous month button' src={prev}/>
      </NavButton>
      <Title $size={size}>
        {month} {year}
      </Title>
      <NavButton disabled={isDisableNext} $isDisabled={isDisableNext} onClick={handleClickNext}>
        <Icon $isDisabled={isDisableNext}  alt='next month button' src={next}/>
      </NavButton>
    </Wrapper>
    
  )
})
