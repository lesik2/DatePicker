import { ComponentType, JSX } from 'react';
import { ICreateCalendar } from '@customTypes/calendar';
import { useHolidays } from '@hooks/useHolidays';

import {colorHolidays} from './helpers/colorHolidays'

export const colorHolidaysDays  = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isColorHolidays, changeDate, dates  } = props;
    const holidays = useHolidays(changeDate.getFullYear())
    if (isColorHolidays) {
      const datesWithColoredHolidays = colorHolidays(holidays,dates, changeDate)
      
      return (
        <Component 
          {...props}
          dates={datesWithColoredHolidays} 
          loading={holidays.length <=0}
        />
      );
    }

    return <Component {...props} />;
  };