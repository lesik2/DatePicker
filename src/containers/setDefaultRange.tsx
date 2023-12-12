import { ComponentType, JSX } from 'react';
import {defineDefaultRangePicker} from '@utils/index'

import { ICreateCalendar } from '../types';

export const setDefaultRange = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { dates, defaultRange, currentDate} = props;

    if (defaultRange) {
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