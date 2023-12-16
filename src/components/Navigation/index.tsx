import {JSX, memo} from 'react'
import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';
import { INavigation } from '@customTypes/index';

import { Icon, NavButton, Wrapper, Title } from './styled'



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
    <Wrapper $size={size} data-testid="navigation">
      <NavButton data-testid="prev-btn" disabled={isDisablePrev} $isDisabled={isDisablePrev} onClick={handleClickPrev}>
        <Icon $isDisabled={isDisablePrev}  alt='previous month button' src={prev}/>
      </NavButton>
      <Title $size={size}>
        {month} {year}
      </Title>
      <NavButton data-testid="next-btn" disabled={isDisableNext} $isDisabled={isDisableNext} onClick={handleClickNext}>
        <Icon $isDisabled={isDisableNext}  alt='next month button' src={next}/>
      </NavButton>
    </Wrapper>
    
  )
})
