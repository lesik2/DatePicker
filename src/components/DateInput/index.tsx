import {JSX, useState, ChangeEvent, memo} from 'react';

import { ClearBtn, IconCalendar, IconClear, Input, Wrapper } from './styled';

import calendarIcon from '../../assets/icons/calendarIcon.svg';
import clear from '../../assets/icons/clear.svg';

export const DateInput = memo((): JSX.Element => {
  const [dateInput, setDateInput] = useState('');
  const handleClick = ()=>{

  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value)
  }

  return (
    <Wrapper>
      <IconCalendar alt ='icon for calendar' src={calendarIcon}/>
      <Input placeholder='Choose Date' value={dateInput} onChange={handleInput}/>
      <ClearBtn onClick={handleClick}>
        <IconClear alt='icon of cross' src={clear}/>
      </ClearBtn>
    </Wrapper>
  )
})
