import {useEffect, useState} from 'react';
import { IHolidays } from '@customTypes/models';
import { saveHolidays, getHolidays } from '@utils/holidays';
import { CountryCode } from '@constants/index';

export function useHolidays(year: number): IHolidays[]{
  const [holidays, setHolidays] = useState<IHolidays[]>([]);
  const fetchHolidays = () => {
    try{
      fetch(`https://public-holiday.p.rapidapi.com/${year}/${CountryCode}`,{
      headers: {
        'X-RapidAPI-Key': 'KEY_HOLIDAYS',
        'X-RapidAPI-Host': 'HOST_HOLIDAYS',
      },
    })
    .then((response: Response)=>response.json())
    .then((data: IHolidays[])=>{
      saveHolidays(data);
      setHolidays(data);
    })
    .catch((error: Error)=> console.error(error.message))

    }catch(error: unknown){
      if(error instanceof Error){
        console.error(error.message)
      }
    }
  }

  useEffect(()=>{
    const holidaysFromStorage = getHolidays();
    if(holidaysFromStorage){
      const validHoliday = new Date(holidaysFromStorage[0].date).getFullYear() === new Date().getFullYear();
      if(!validHoliday){
        fetchHolidays();
      }else{
        setHolidays(holidaysFromStorage);
      }
    }else{
      fetchHolidays();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return holidays;
}