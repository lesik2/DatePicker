import { ComponentType, JSX } from 'react';
import { ICreateCalendar } from '@customTypes/calendar';
import { getRangeDateFromStorage } from '@utils/rangePicker';

import {defineDefaultRangePicker} from './helpers/defineDefaultRangePicker'

export const setDefaultRange = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { dates, defaultRange, changeDate, currentDate} = props;

    if (defaultRange && getRangeDateFromStorage('start')===null && changeDate.getTime()===currentDate.getTime()) {
      const defaultRangeDates= defineDefaultRangePicker(dates, currentDate);

      return (
        <Component 
          {...props}
          dates={defaultRangeDates} 
        />
      );
    }

    return <Component {...props} />;
  };