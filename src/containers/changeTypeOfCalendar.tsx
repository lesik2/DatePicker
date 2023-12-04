import { ComponentType, JSX } from 'react';
import { changeTypeOfCalendarToWeek} from '@utils/index';

import { ICreateCalendar } from '../types';

export const changeTypeOfCalendar = (Component: ComponentType<ICreateCalendar>) =>
  (props: ICreateCalendar): JSX.Element => {
    const { type, dates,date, startWeekFrom  } = props;

    if (type==='week' && dates && date && startWeekFrom) {
      const datesWithoutWeekend = changeTypeOfCalendarToWeek(dates, date, startWeekFrom );

      return (
        <Component 
          {...props}
          dates={datesWithoutWeekend} 
        />
      );
    }

    return <Component {...props} />;
  };