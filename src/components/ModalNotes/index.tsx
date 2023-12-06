import {JSX, Dispatch, ChangeEvent} from 'react'
import { INote } from '@customTypes/index';

import { AddBtn, EmptyMessage, Icon, ListNotes, NoteInput, NoteWrapper, RemoveBtn, Title, Wrapper } from './styled'

import removeIcon from '../../assets/icons/removeIcon.svg';
import addIcon from '../../assets/icons/clear.svg';


export interface IModalNotes{
  notes: INote[];
  setNotes: Dispatch<React.SetStateAction<INote[]>>
}
export  function ModalNotes ({notes, setNotes}: IModalNotes): JSX.Element {
  const addNote = () => {
    setNotes([...notes, {text: '',id: notes.length>0? notes[notes.length-1].id+1:1}])
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note)=>note.id!==id))
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
    <Wrapper>
      <Title>
        Notes
      </Title>
      <ListNotes>
        {notes.length!==0?
          notes.map((note)=>(
            <NoteWrapper key={note.id}>
              <NoteInput value={note.text} onChange={(event)=>handleInput(event, note.id)}/>
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
