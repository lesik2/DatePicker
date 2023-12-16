import { INote } from '@customTypes/models';
import { saveNotesForDate } from '@utils/notes';
import { useEffect } from 'react';

export function useSaveNote(notes: INote[], date: Date): void{
  useEffect(()=>{
    saveNotesForDate(date.toLocaleDateString(), notes);
  }, [notes, date])
}
