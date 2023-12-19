import { ComponentType, JSX } from 'react';
import { ICreateCalendar } from '@customTypes/calendar';

import { removeWeekdayDays } from './helpers/removeWeekdayDays';

export const changeVisibilityOfWeekend = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isShowWeekend, dates, startWeekFrom } = props;

    if (!isShowWeekend) {
      const datesWithoutWeekend = removeWeekdayDays(dates, startWeekFrom);

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    return <Component {...props} />;
  };