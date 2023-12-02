import {JSX} from 'react'
import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';

import { Icon, NavButton, Wrapper, Title } from './styled'

export function Navigation(): JSX.Element {
  return (
    <Wrapper>
      <NavButton>
        <Icon  alt='previous month button' src={prev}/>
      </NavButton>
      <Title>
        November 2022
      </Title>
      <NavButton>
        <Icon  alt='next month button' src={next}/>
      </NavButton>
    </Wrapper>
    
  )
}
