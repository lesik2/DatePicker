import {useEffect, useState} from 'react';

import { IHolidays } from '../types';



export const CountryCode = 'BY';


export function useHolidays(year: number): IHolidays[]{
  const [holidays, setHolidays] = useState<IHolidays[]>([]);
  const fetchHolidays = () => {
    try{
      fetch(`https://public-holiday.p.rapidapi.com/${year}/${CountryCode}`,{
      headers: {
        'X-RapidAPI-Key': '11c57626b2msh278514962164ed1p109c86jsnb5d797c50751',
        'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
      },
    })
    .then((response: Response)=>response.json())
    .then((data: IHolidays[])=>{
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
    fetchHolidays();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return holidays;
}