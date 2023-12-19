import { ComponentType, JSX } from 'react';
import { ICreateCalendar } from '@customTypes/calendar';

import {disableMaxDates, disableMinDates} from './helpers/defineLimit'

export const disableLimit = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { dates, min, max, isDisablePrev, isDisableNext} = props;

    if (isDisableNext || isDisablePrev) {
      const disabledDate = isDisableNext?
      disableMaxDates(dates, max):disableMinDates(dates, min);

      return (
        <Component 
          {...props}
          dates={disabledDate}
        />
      );
    }

    return <Component {...props} />;
  };