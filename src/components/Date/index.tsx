import {JSX, useState} from 'react'
import { IDate, INote } from '@customTypes/index';

import { DateWrapper, NumberOfDate } from './styled';

import { ModalNotes } from '../ModalNotes';
import { Modal } from '../Modal';


export function DateCell({type,dateNumber }: IDate): JSX.Element{
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<INote[]>([
    {text: 'Implement max and min limit', id: 1},{text: 'Prepare for interview', id:2}
  ])

  // eslint-disable-next-line no-console
  console.log(setNotes);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleDoubleClick = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <DateWrapper onDoubleClick={handleDoubleClick} $type={type} disabled={type==='disabled'}>
      <NumberOfDate $type={type} $task={notes.length>0}>
        {dateNumber}
      </NumberOfDate>
      {isOpen && 
        <Modal onClose={handleClose}>
          <ModalNotes notes={notes} />
        </Modal>
      }
    </DateWrapper>

  )
}
