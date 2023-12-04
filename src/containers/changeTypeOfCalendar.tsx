import { ComponentType, JSX } from 'react';
import { changeTypeOfCalendarToWeek} from '@utils/index';

import { ICreateCalendar } from '../types';

export const changeTypeOfCalendar = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { type, dates } = props;

    if (type==='week' && dates) {
      const datesWithoutWeekend = changeTypeOfCalendarToWeek(dates);

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    return <Component {...props} />;
  };