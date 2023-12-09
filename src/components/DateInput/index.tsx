import {JSX, useState, ChangeEvent, memo } from 'react';
import calendarIcon from '@assets/icons/calendarIcon.svg';
import clear from '@assets/icons/clear.svg';
import { REGULAR_EXPRESSIONS } from '@constants/index';

import { ClearBtn, IconCalendar, IconClear, Input, Wrapper } from './styled';

import { Tooltip } from '../Tooltip';


export interface IDateInput{
  handleSearchCalendar: (searchDate: Date) => void;
}
export const DateInput = memo(({handleSearchCalendar}: IDateInput): JSX.Element => {
  const [dateInput, setDateInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = ()=>{
    setDateInput('');
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setDateInput(inputValue)
    if(REGULAR_EXPRESSIONS.dateFormatForDayMonthYear.test(inputValue.trim())){
      const [day, month, year] = inputValue.split('/').map((item)=>parseInt(item,10));

      const limitDate = new Date(year, month-1, day);

      handleSearchCalendar(limitDate);
    }
  }

  const handleFocus = () => {
    setIsOpen(true);
  }

  return (
    <Wrapper>
      <IconCalendar alt ='icon for calendar' src={calendarIcon}/>
      <Input onFocus={handleFocus} placeholder='Choose Date' value={dateInput} onChange={handleInput}/>
      <ClearBtn onClick={handleClick}>
        <IconClear alt='icon of cross' src={clear}/>
      </ClearBtn>
      <Tooltip message='Format day/month/year e.g 23/12/2023' isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Wrapper>
  )
})
