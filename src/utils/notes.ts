import { INote } from "@customTypes/models";

export function getNotesForDate(date: string): INote[] | null {
  const storedNotes = localStorage.getItem(date);
  if (storedNotes!==null) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(storedNotes);
    } catch (error) {
      console.error('Error parsing notes from local storage:', error);
    }
  }

  return null;
}

export function saveNotesForDate(date: string, notes: INote[]): void {
  localStorage.setItem(date, JSON.stringify(notes));
}