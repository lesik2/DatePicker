import {LOCAL_STORAGE_KEYS} from '@constants/index'

import { IHolidays } from "../types/models";

export function getHolidays():  IHolidays[] | null {
  const storedHolidays = localStorage.getItem(LOCAL_STORAGE_KEYS.HOLIDAY);
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
  localStorage.setItem(LOCAL_STORAGE_KEYS.HOLIDAY, JSON.stringify(holidays));
}