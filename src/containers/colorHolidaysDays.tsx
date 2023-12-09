import { ComponentType, JSX } from 'react';

import { ICreateCalendar } from '../types';
import { useHolidays } from '../hooks/useHolidays';
import {colorHolidays} from '../utils/index'

export const colorHolidaysDays  = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isColorHolidays, date, dates  } = props;
    const holidays = useHolidays(date.getFullYear())
    if (isColorHolidays) {
      const datesWithColoredHolidays = colorHolidays(holidays,dates, date)
      
      return (
        <Component 
          {...props}
          dates={datesWithColoredHolidays} 
        />
      );
    }

    return <Component {...props} />;
  };