import { ComponentType, JSX } from 'react';
import { removeWeekdayDates } from '@utils/index';

import { ICreateCalendar } from '../types';

export const changeVisibilityOfWeekend = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isShowHolidays, dates, startWeekFrom } = props;

    if (!isShowHolidays) {
      const datesWithoutWeekend = removeWeekdayDates(dates, startWeekFrom);

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    return <Component {...props} />;
  };