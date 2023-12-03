import {FC, JSX} from 'react';
import {getDatesStartWithSunday} from '@utils/index'

import { ICalendar } from '../types';

export const startWeekDecorator = (Component: FC) => (props: ICalendar): JSX.Element => {
  const {startWeekFrom, dates} = props;


  if (startWeekFrom === 'Su') {
    const datesStartWithSunday = getDatesStartWithSunday(dates);
    // eslint-disable-next-line no-console
    console.log(datesStartWithSunday);

    return (
        <Component/>
    );
  }

  return <Component/>;
};