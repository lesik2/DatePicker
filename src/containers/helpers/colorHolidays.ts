import { IDate, IHolidays} from "@customTypes/models";

export const colorHolidays = (holidays: IHolidays[], dates: IDate[], date: Date): IDate[] => {
  const holidayDates = [...dates];
  const currentHolidays = holidays.filter((holiday)=>{
    const holidayDate = new Date(holiday.date);

    return holidayDate.getMonth() === date.getMonth()
  })

  currentHolidays.forEach((holiday)=>{
    const holidayDate = new Date(holiday.date);

    const dateIndex = holidayDates.findIndex((item)=>item.dateNumber === holidayDate.getDate());

    if(dateIndex !== -1){
      holidayDates[dateIndex].holiday = true;
    }
  })

  return holidayDates;
}