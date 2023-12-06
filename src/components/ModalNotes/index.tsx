import {JSX} from 'react'
import { INote } from '@customTypes/index';

import { AddBtn, Icon, ListNotes, NoteInput, NoteWrapper, RemoveBtn, Title, Wrapper } from './styled'

import removeIcon from '../../assets/icons/removeIcon.svg';
import addIcon from '../../assets/icons/clear.svg';


export interface IModalNotes{
  notes: INote[];
}
export  function ModalNotes ({notes}: IModalNotes): JSX.Element {
  return (
    <Wrapper>
      <Title>
        Notes
      </Title>
      <ListNotes>
        {notes.map((note)=>(
          <NoteWrapper key={note.id}>
            <NoteInput value={note.text}/>
            <RemoveBtn>
              <Icon alt='remove button' src={removeIcon}/>
            </RemoveBtn>
          </NoteWrapper>
        ))}
      </ListNotes>
      <AddBtn>
        <Icon alt='add button' src={addIcon}/>
      </AddBtn>
    </Wrapper>
  )
}
