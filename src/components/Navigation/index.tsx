import {JSX} from 'react'
import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';

import { Icon, NavButton, Wrapper, Title } from './styled'

export interface INavigation{
  month: string;
  year: number;
}
export function Navigation({year, month }: INavigation): JSX.Element {
  return (
    <Wrapper>
      <NavButton>
        <Icon  alt='previous month button' src={prev}/>
      </NavButton>
      <Title>
        {month} {year}
      </Title>
      <NavButton>
        <Icon  alt='next month button' src={next}/>
      </NavButton>
    </Wrapper>
    
  )
}
