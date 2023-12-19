import { useState, useEffect, useMemo} from 'react'
import { IDateComponent } from '@customTypes/index';
import { INote } from '@customTypes/models';
import { getNotesForDateFromStorage } from '@utils/notes';
import {CONSTANTS} from '@constants/index'

import { DateWrapper, NumberOfDate } from './styled';

import { ModalNotes } from '../ModalNotes/index';
import { Modal } from '../Modal/index';
import { Tooltip } from '../Tooltip';

export function DateCell({
  type,dateNumber, date, incrementOfClicks, holiday,color,size 
}: IDateComponent){
  const dateLocal = useMemo(()=>new Date(date.getFullYear(), date.getMonth(),dateNumber),[date, dateNumber]);
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<INote[]>([]);
  const [isOpenTip, setIsOpenTip] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoubleClick = () =>{
    setIsOpen(true);
  }

  const handleClick = () => {
    incrementOfClicks(dateNumber);
    setIsOpenTip(true);
  }

  useEffect(()=>{
    const notesFromStorage = getNotesForDateFromStorage(dateLocal.toLocaleDateString());
    if(notesFromStorage){
      setNotes(notesFromStorage)
    }
  },[dateLocal])


  return (
    <>
    <DateWrapper 
      data-testid="date-cell"
      onClick={handleClick} 
      onDoubleClick={handleDoubleClick} 
      $size={size} 
      $type={type} 
      $color={color} 
      disabled={type==='disabled'}
      >
      <NumberOfDate 
        $color={color} 
        $type={type} 
        $task={notes.length>0} 
        $size={size} 
        $holiday={holiday??false}
      >
        {dateNumber}
      </NumberOfDate>
      <Tooltip  
        isOpen={isOpenTip} 
        setIsOpen={setIsOpenTip} 
        message={CONSTANTS.TOOLTIP_FOR_DATE_CELL
      }/>
    </DateWrapper>
      {isOpen && 
        <Modal onClose={handleClose}>
          <ModalNotes size={size} notes={notes} setNotes={setNotes} date={dateLocal} />
        </Modal>
      }
    </>

  )
}
