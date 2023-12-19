import { IDate } from "@customTypes/models";


export const disableMinDates = (dates: IDate[], minDate: Date|null): IDate[]=>{
  let  newDates = [...dates];
  if(minDate){
    newDates = newDates.map((date)=>(date.dateNumber < minDate.getDate()?{...date, type:'disabled'}:date))
  }
  
  return newDates;
}

export const disableMaxDates = (dates: IDate[], maxDate: Date|null): IDate[]=>{
  let newDates = [...dates];
  if(maxDate){
    newDates = newDates.map((date)=>{
      if(date.dateNumber>maxDate.getDate()){
        return {...date, type:'disabled'}
      }
      
      return date;
    })
  }

  return newDates;
}