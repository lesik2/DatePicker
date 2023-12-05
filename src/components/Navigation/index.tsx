import {JSX} from 'react'
import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';

import { Icon, NavButton, Wrapper, Title } from './styled'

export interface INavigation{
  month: string;
  year: number;
  handleNextDate?: () => void;
  handlePrevDate?: () => void;
}
export function Navigation({
  year, month, handleNextDate, handlePrevDate 
}: INavigation): JSX.Element {
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
    <Wrapper>
      <NavButton onClick={handleClickPrev}>
        <Icon  alt='previous month button' src={prev}/>
      </NavButton>
      <Title>
        {month} {year}
      </Title>
      <NavButton onClick={handleClickNext}>
        <Icon  alt='next month button' src={next}/>
      </NavButton>
    </Wrapper>
    
  )
}
