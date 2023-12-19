import {JSX, useState, ChangeEvent, memo } from 'react';
import calendarIcon from '@assets/icons/calendarIcon.svg';
import clear from '@assets/icons/clear.svg';
import { REGULAR_EXPRESSIONS ,CONSTANTS} from '@constants/index';
import { IDateInput } from '@customTypes/index';

import { ClearBtn, IconCalendar, IconClear, Input, Wrapper } from './styled';

import { Tooltip } from '../Tooltip';


export const DateInput = memo(({handleSearchCalendar, size}: IDateInput): JSX.Element => {
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
    <Wrapper data-testid="date-input" $size={size}>
      <IconCalendar alt ='calendar' src={calendarIcon} $size={size}/>
      <Input 
        $size={size} 
        onFocus={handleFocus} 
        placeholder={CONSTANTS.PLACEHOLDER_INPUT} 
        value={dateInput} 
        onChange={handleInput}
      />
      <ClearBtn onClick={handleClick}>
        <IconClear alt='icon of cross' src={clear}/>
      </ClearBtn>
      <Tooltip message={CONSTANTS.TOOLTIP_FORMAT_DATE} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Wrapper>
  )
})
