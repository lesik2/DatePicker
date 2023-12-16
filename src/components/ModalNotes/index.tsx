import {JSX, ChangeEvent} from 'react';
import {IModalNotes} from '@customTypes/modal'
import removeIcon from '@assets/icons/removeIcon.svg';
import addIcon from '@assets/icons/clear.svg';
import {CONSTANTS} from '@constants/index'

import { AddBtn, EmptyMessage, Icon, ListNotes, NoteInput, NoteWrapper, RemoveBtn, Title, Wrapper } from './styled'
import { useSaveNote } from './hooks/useSaveNote';

export  function ModalNotes ({notes, setNotes, date, size}: IModalNotes): JSX.Element {
  const addNote = () => {
    const nextNotes = [...notes, {text: '',id: notes.length>0? notes[notes.length-1].id+1:1}];
    setNotes(nextNotes)
  }

  useSaveNote(notes, date);
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
        {CONSTANTS.NOTES_TITLE}
      </Title>
      <ListNotes data-testid="modal-notes">
        {notes.length!==0?
          notes.map((note)=>(
            <NoteWrapper key={note.id}>
              <NoteInput 
                $size={size} 
                value={note.text}
                data-testid = 'input-note' 
                onChange={(event)=>handleInput(event, note.id)
                }
              />
              <RemoveBtn data-testid="delete-note" onClick={()=> deleteNote(note.id)}>
                <Icon alt='remove button' src={removeIcon}/>
              </RemoveBtn>
            </NoteWrapper>
          )):
          <EmptyMessage>{CONSTANTS.EMPTY_NOTES}</EmptyMessage>
        }
      </ListNotes>
      <AddBtn data-testid="add-note" onClick={addNote}>
        <Icon alt='add button' src={addIcon}/>
      </AddBtn>
    </Wrapper>
  )
}
