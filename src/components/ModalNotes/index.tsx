import {JSX, Dispatch, ChangeEvent, useEffect } from 'react'
import { INote, ISize } from '@customTypes/index';

import { AddBtn, EmptyMessage, Icon, ListNotes, NoteInput, NoteWrapper, RemoveBtn, Title, Wrapper } from './styled'

import removeIcon from '../../assets/icons/removeIcon.svg';
import addIcon from '../../assets/icons/clear.svg';
import { saveNotesForDate } from '../../utils/notes';

export interface IModalNotes{
  notes: INote[];
  setNotes: Dispatch<React.SetStateAction<INote[]>>;
  date: Date;
  size: ISize;
}
export  function ModalNotes ({notes, setNotes, date, size}: IModalNotes): JSX.Element {
  const addNote = () => {
    const nextNotes = [...notes, {text: '',id: notes.length>0? notes[notes.length-1].id+1:1}];
    setNotes(nextNotes)
  }

  useEffect(()=>{
    saveNotesForDate(date.toLocaleDateString(), notes);
  }, [notes, date])
  
  const deleteNote = (id: number) => {
    const nextNotes = notes.filter((note)=>note.id!==id);
    setNotes(nextNotes);
  }

const handleInput = (event: ChangeEvent<HTMLInputElement>, id: number) => {
  const updatedNotes = notes.map((note) => {
    if (note.id === id) {
      return {
        ...note,
        text: event.target.value
      };
    }

    return note;
  });

  setNotes(updatedNotes);
}

  return (
    <Wrapper $size={size}>
      <Title>
        Notes
      </Title>
      <ListNotes>
        {notes.length!==0?
          notes.map((note)=>(
            <NoteWrapper key={note.id}>
              <NoteInput 
                $size={size} 
                value={note.text} 
                onChange={(event)=>handleInput(event, note.id)
                }
              />
              <RemoveBtn onClick={()=> deleteNote(note.id)}>
                <Icon alt='remove button' src={removeIcon}/>
              </RemoveBtn>
            </NoteWrapper>
          )):
          <EmptyMessage>You don`t have any notes yet</EmptyMessage>
        }
      </ListNotes>
      <AddBtn onClick={addNote}>
        <Icon alt='add button' src={addIcon}/>
      </AddBtn>
    </Wrapper>
  )
}
