import {useEffect, useState} from 'react';
import { IHolidays } from '@customTypes/models';
import { saveHolidaysToStorage, getHolidaysFromStorage } from '@utils/holidays';
import { CountryCode } from '@constants/index';

export function useHolidays(year: number): IHolidays[]{
  const [holidays, setHolidays] = useState<IHolidays[]>([]);


  useEffect(()=>{
    const fetchHolidays = () => {
      try{
        fetch(`https://public-holiday.p.rapidapi.com/${year}/${CountryCode}`,{
        headers: {
          'X-RapidAPI-Key': 'KEY_HOLIDAYS',
          'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com',
        },
      })
      .then((response: Response)=>response.json())
      .then((data: IHolidays[])=>{
        saveHolidaysToStorage(data);
        setHolidays(data);
      })
      .catch((error: Error)=> console.error(error.message))
  
      }catch(error: unknown){
        if(error instanceof Error){
          console.error(error.message)
        }
      }
    }

    const holidaysFromStorage = getHolidaysFromStorage();
    const validHoliday = holidaysFromStorage.length>0?
    new Date(holidaysFromStorage[0].date).getFullYear() === new Date().getFullYear():false;

      if(!validHoliday){
        fetchHolidays();
      }else{
        setHolidays(holidaysFromStorage);
      }
    
  },[year])

  return holidays;
}