import {JSX, useState} from 'react'
import {Main} from '@components/Main/index'
import {Navigation} from '@components/Navigation/index'
import {DateCell} from '@components/Date/index'
import {Weekday} from '@components/Weekday/index'
import { DateInput } from '@components/DateInput/index'
import { clearRangeDateFromStorage, getRangeDateFromStorage, saveRangeDateToStorage } from '@utils/rangePicker'
import { ICreateCalendar} from '@customTypes/calendar'
import { IDate } from '@customTypes/models'

import { Wrapper,CalendarWrapper } from './styled'
import { useRangeDate } from './hooks/useRangeDate'

import { ClearButton } from '../ClearButton'
import { InfinityLoader } from '../InfinityLoader'



export function Calendar({
  dates, changeDate, startWeekFrom, isShowWeekend, handleNextDate, 
  handlePrevDate, isDisableNext, isDisablePrev, handleSearchCalendar,loading, isColorHolidays,
  color, size
}: ICreateCalendar): JSX.Element {
  
  const year = changeDate.getFullYear();
  const month = changeDate.toLocaleString('en-US', { month: 'long' });
  const defineAmountOfClicks=(): number => {
    const startDate = getRangeDateFromStorage('start') === null?0:1;
    const endDate = getRangeDateFromStorage('end') === null?0:1;

    return startDate+ endDate;
  }

  const [datesOfCalendar, setDatesOfCalendar] = useState<IDate[]>(dates);
  const [amountOfClicks, setAmountOfClicks] = useState(defineAmountOfClicks());
  const [start, setStart]  = useState<Date|null>(getRangeDateFromStorage('start'));
  const [end, setEnd] = useState<Date| null>(getRangeDateFromStorage('end'));

  useRangeDate(start, end,changeDate,datesOfCalendar,setDatesOfCalendar);

  const incrementOfClicks = (numberOfDate: number) => {
    if(amountOfClicks+1 === 1){
      const startDate = new Date(year, changeDate.getMonth(), numberOfDate);
      setStart(startDate)
      saveRangeDateToStorage(startDate.toString(), 'start');
      setAmountOfClicks((prev)=>prev+1)
    }else if(amountOfClicks+1 === 2 && start){
      const endDate = new Date(year, changeDate.getMonth(), numberOfDate);
      if(endDate.getDate()>start.getDate()){
        setEnd(endDate);
        saveRangeDateToStorage(endDate.toString(), 'end');
        setAmountOfClicks((prev)=>prev+1)
      }

    }
  }

  const handleClear = () => {
    setStart(null);
    setEnd(null);
    setAmountOfClicks(0);
    clearRangeDateFromStorage();
    const clearDates: IDate[] = datesOfCalendar.map((item)=>{
      if(item.type === 'start' || item.type ==='end' || item.type === 'between'){
        return {...item, type: 'default'}
      }

      return item
    })

    setDatesOfCalendar(clearDates)
  }

 
  
  return (
    <Wrapper>
      <DateInput size={size} handleSearchCalendar={handleSearchCalendar}/>
      <CalendarWrapper $size={size} $clear={start !==null}>
          <Navigation
            year={year} 
            month={month} 
            handleNextDate={handleNextDate} 
            handlePrevDate={handlePrevDate}
            isDisableNext={isDisableNext}
            isDisablePrev={isDisablePrev}
            size={size}
            
          />
          <Weekday size={size} startWeekFrom={startWeekFrom} showHolidays={isShowWeekend}/>
          {loading && isColorHolidays ?<InfinityLoader color={color} />: 
            <Main size={size}  showHolidays={isShowWeekend}>
                {datesOfCalendar.map((dateItem, index)=>(
                  <DateCell 
                    // eslint-disable-next-line react/no-array-index-key
                    key={index} 
                    {...dateItem} date={changeDate} 
                    incrementOfClicks={incrementOfClicks}
                    color={color}
                    size={size}
                  />
                ))}
            </Main>
          }
          
      </CalendarWrapper>
      {start && <ClearButton size={size} handleClear={handleClear}/>}
    </Wrapper>
    
  )
}
