

export const DATE_START = 'start';
export const DATE_END = 'end';
export type StartOrEnd = 'end'|'start';

export function getStartDate(startOrEnd: StartOrEnd): Date| null {
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

export function saveStartDate(date: string,startOrEnd: StartOrEnd): void {
  localStorage.setItem(startOrEnd, date);
}

export function clearStartDate(): void{
  localStorage.removeItem(DATE_START);
  localStorage.removeItem(DATE_END);
}