import { ComponentType, JSX } from 'react';

import { ICreateCalendar } from '../types';
import {disableMaxDates, disableMinDates} from '../utils/index'

export const colorHolidaysDays = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { dates, min, max, isDisablePrev, isDisableNext } = props;

    if (isDisableNext || isDisablePrev) {
      const disabledDate = isDisableNext?disableMaxDates(dates, max):disableMinDates(dates, min);

      return (
        <Component 
          {...props}
          dates={disabledDate}
        />
      );
    }

    return <Component {...props} />;
  };