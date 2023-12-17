import { ComponentType, JSX } from 'react';
import { ICreateCalendar } from '@customTypes/calendar';

import { changeTypeOfCalendarToWeek, changeTypeOfCalendarToYear} from './helpers/changeType';

import { YearWrapper } from '../components/Calendar/styled';

export const changeTypeOfCalendar = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { type, dates,changeDate, startWeekFrom, currentDate, size } = props;

    if (type==='week') {
      const datesWithoutWeekend = changeTypeOfCalendarToWeek(dates, changeDate, startWeekFrom );

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    if(type === 'year'){
      const yearDates = changeTypeOfCalendarToYear(changeDate.getFullYear(),startWeekFrom,currentDate);
      
      return (
        <YearWrapper $size={size}>
        {
          yearDates.map((month, index)=>(
            <Component
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              {...props}
              dates={month.dates}
              changeDate={month.date} 
            />
          ))
        }
                
        </YearWrapper>
      )
    }

    return <Component {...props} />;
  };