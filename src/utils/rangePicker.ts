import {LOCAL_STORAGE_KEYS} from '@constants/index'
import { StartOrEnd } from '@customTypes/models';


export function getRangeDateFromStorage(startOrEnd: StartOrEnd): Date| null {
  const date = localStorage.getItem(startOrEnd);

  if (date!==null) {
    try {
        return  new Date(date);
    } catch (error) {
      console.error('Error start date from local storage:', error);
    }
  }
  
  return null;
}

export function saveRangeDateToStorage(date: string,startOrEnd: StartOrEnd): void {
  localStorage.setItem(startOrEnd, date);
}

export function clearRangeDateFromStorage(): void{
  localStorage.removeItem(LOCAL_STORAGE_KEYS.DATE_START);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.DATE_END);
}