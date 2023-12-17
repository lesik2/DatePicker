import { INote } from '@customTypes/models';
import { saveNotesForDateToStorage } from '@utils/notes';
import { useEffect } from 'react';

export function useSaveNote(notes: INote[], date: Date): void{
  useEffect(()=>{
    saveNotesForDateToStorage(date.toLocaleDateString(), notes);
  }, [notes, date])
}
