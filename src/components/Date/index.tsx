import {JSX, useState, useEffect} from 'react'
import { IDateComponent, INote } from '@customTypes/index';

import { DateWrapper, NumberOfDate } from './styled';

import { ModalNotes } from '../ModalNotes/index';
import { Modal } from '../Modal/index';
import { getNotesForDate, saveNotesForDate } from '../../utils/notes';


export function DateCell({type,dateNumber, date }: IDateComponent): JSX.Element{
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<INote[]>([])
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoubleClick = () =>{
    setIsOpen(true);
  }

  useEffect(()=>{
    const dateLocal = new Date(date.getFullYear(), date.getMonth(),dateNumber);
    const dateStr = dateLocal.toLocaleDateString();
    const notesFromStorage = getNotesForDate(dateStr)
    if(notesFromStorage){
      setNotes(notesFromStorage)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(() => () => {
    if(notes.length>0){
      const dateLocal = new Date(date.getFullYear(), date.getMonth(),dateNumber);
      saveNotesForDate(dateLocal.toLocaleDateString(), notes);
    }
  }, [notes, dateNumber, date]);

  return (
    <DateWrapper onDoubleClick={handleDoubleClick} $type={type} disabled={type==='disabled'}>
      <NumberOfDate $type={type} $task={notes.length>0}>
        {dateNumber}
      </NumberOfDate>
      {isOpen && 
        <Modal onClose={handleClose}>
          <ModalNotes notes={notes} setNotes={setNotes} />
        </Modal>
      }
    </DateWrapper>

  )
}
