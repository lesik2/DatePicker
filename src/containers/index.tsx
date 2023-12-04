/* eslint-disable no-console */
import {Component} from 'react';


import { changeVisibilityOfWeekend } from './changeVisibilityOfWeekend';

import { Calendar } from '../components/Calendar';
import { ICalendarService, ICalendarServiceState, ICreateCalendar } from '../types';
import {getCalendarDates} from '../utils/index';




export class CalendarService extends Component<ICreateCalendar,ICalendarServiceState>{

  constructor(props: ICalendarService){
    super(props);
    this.state = {
      currentDate: new Date(),
    }
  }


  render(): JSX.Element{
    const {currentDate} = this.state;
    const {type='month',isShowHolidays=true,startWeekFrom='Mo'} = this.props;
    const dates = getCalendarDates(currentDate.getFullYear(),currentDate.getMonth(), startWeekFrom);
    const DecoratedCalendar = changeVisibilityOfWeekend(Calendar)

    return (
        <DecoratedCalendar  
          type={type} 
          isShowHolidays={isShowHolidays} 
          startWeekFrom={startWeekFrom}
          date={currentDate}
          dates={dates}        
        />
    )
  }

}