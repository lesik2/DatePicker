import { ComponentType, JSX } from 'react';
import { removeWeekdayDates } from '@utils/index';

import { ICreateCalendar } from '../types';

export const changeVisibilityOfWeekend = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isShowHolidays, dates } = props;

    if (!isShowHolidays && dates) {
      const datesWithoutWeekend = removeWeekdayDates(dates);

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    return <Component {...props} />;
  };