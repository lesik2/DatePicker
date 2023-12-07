import {JSX, useState, useEffect} from 'react'
import { IDateComponent, INote } from '@customTypes/index';

import { DateWrapper, NumberOfDate } from './styled';

import { ModalNotes } from '../ModalNotes/index';
import { Modal } from '../Modal/index';
import { getNotesForDate } from '../../utils/notes';


export function DateCell({
  type,dateNumber, date, incrementOfClicks, holiday 
}: IDateComponent): JSX.Element{
  const dateLocal = new Date(date.getFullYear(), date.getMonth(),dateNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<INote[]>([])
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoubleClick = () =>{
    setIsOpen(true);
  }

  const handleClick = () => {
    incrementOfClicks(dateNumber);
  }

  useEffect(()=>{
    const notesFromStorage = getNotesForDate(dateLocal.toLocaleDateString());
    if(notesFromStorage){
      setNotes(notesFromStorage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <>
    <DateWrapper onClick={handleClick} onDoubleClick={handleDoubleClick} $type={type} disabled={type==='disabled'}>
      <NumberOfDate $type={type} $task={notes.length>0} $holiday={holiday??false}>
        {dateNumber}
      </NumberOfDate>
    </DateWrapper>
      {isOpen && 
        <Modal onClose={handleClose}>
          <ModalNotes notes={notes} setNotes={setNotes} date={dateLocal} />
        </Modal>
      }
    </>

  )
}
