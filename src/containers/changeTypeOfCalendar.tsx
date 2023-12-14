import { ComponentType, JSX } from 'react';
import { changeTypeOfCalendarToWeek, getCalendarYear} from '@utils/index';

import { ICreateCalendar } from '../types';
import { YearWrapper } from '../components/Calendar/styled';

export const changeTypeOfCalendar = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { type, dates,date, startWeekFrom, currentDate, size } = props;

    if (type==='week') {
      const datesWithoutWeekend = changeTypeOfCalendarToWeek(dates, date, startWeekFrom );

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    if(type === 'year'){
      const yearDates = getCalendarYear(date.getFullYear(),startWeekFrom,currentDate);
      
      return (
        <YearWrapper $size={size}>
        {
          yearDates.map((month, index)=>(
            <Component
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              {...props}
              dates={month.dates}
              date={month.date} 
            />
          ))
        }
                
        </YearWrapper>
      )
    }

    return <Component {...props} />;
  };