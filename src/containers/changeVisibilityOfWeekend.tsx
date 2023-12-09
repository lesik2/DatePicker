import { ComponentType, JSX } from 'react';
import { removeWeekdayDates } from '@utils/index';

import { ICreateCalendar } from '../types';

export const changeVisibilityOfWeekend = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { isShowWeekend, dates, startWeekFrom } = props;

    if (!isShowWeekend) {
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