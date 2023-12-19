import { INote } from "@customTypes/models";

export function getNotesForDateFromStorage(date: string): INote[] | null {
  
    try {
      const storedNotes = localStorage.getItem(date);
      if (storedNotes!==null){
        return JSON.parse(storedNotes) as INote[];
      }
    } catch (error) {
      console.error('Error parsing notes from local storage:', error);
    }
  
  return null;
}

export function saveNotesForDateToStorage(date: string, notes: INote[]): void {
  localStorage.setItem(date, JSON.stringify(notes));
}