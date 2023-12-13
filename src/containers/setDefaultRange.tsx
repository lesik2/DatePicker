import { ComponentType, JSX } from 'react';
import {defineDefaultRangePicker} from '@utils/index'

import { ICreateCalendar } from '../types';
import { getStartDate } from '../utils/rangePicker';

export const setDefaultRange = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { dates, defaultRange, date} = props;

    if (defaultRange && getStartDate('start')===null) {
      const defaultRangeDates= defineDefaultRangePicker(dates, date);

      return (
        <Component 
          {...props}
          dates={defaultRangeDates} 
        />
      );
    }

    return <Component {...props} />;
  };