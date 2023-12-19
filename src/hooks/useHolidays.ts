import {useEffect, useState} from 'react';
import { IHolidays } from '@customTypes/models';
import { saveHolidaysToStorage, getHolidaysFromStorage } from '@utils/holidays';
import { CountryCode } from '@constants/index';

export function useHolidays(year: number): IHolidays[]{
  const [holidays, setHolidays] = useState<IHolidays[]>([]);
  const fetchHolidays = () => {
    try{
      fetch(`https://public-holiday.p.rapidapi.com/${year}/${CountryCode}`,{
      headers: {
        'X-RapidAPI-Key': '11c57626b2msh278514962164ed1p109c86jsnb5d797c50751',
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

  useEffect(()=>{
    const holidaysFromStorage = getHolidaysFromStorage();
    if(holidaysFromStorage && holidaysFromStorage.length>0){
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