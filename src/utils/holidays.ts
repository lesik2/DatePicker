import {LOCAL_STORAGE_KEYS} from '@constants/index'

import { IHolidays } from "../types/models";

export function getHolidaysFromStorage():  IHolidays[] {
    try {
      const storedHolidays = localStorage.getItem(LOCAL_STORAGE_KEYS.HOLIDAY);
      if (storedHolidays!==null){
        return JSON.parse(storedHolidays) as IHolidays[];
      }
    } catch (error) {
      console.error('Error parsing notes from local storage:', error);
    }

  return [];
}

export function saveHolidaysToStorage(holidays: IHolidays[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEYS.HOLIDAY, JSON.stringify(holidays));
}