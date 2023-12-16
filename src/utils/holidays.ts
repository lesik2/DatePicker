import { IHolidays } from "../types/models";

export const Holiday = 'holiday';
export function getHolidays():  IHolidays[] | null {
  const storedHolidays = localStorage.getItem(Holiday);
  if (storedHolidays!==null) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(storedHolidays);
    } catch (error) {
      console.error('Error parsing notes from local storage:', error);
    }
  }

  return null;
}

export function saveHolidays(holidays: IHolidays[]): void {
  localStorage.setItem(Holiday, JSON.stringify(holidays));
}