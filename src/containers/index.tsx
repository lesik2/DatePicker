/* eslint-disable no-console */
import {Component, JSX} from 'react';

import { Calendar } from '../components/Calendar';
import { ICalendarService, ICalendarServiceState, ICreateCalendar } from '../types';



export class CalendarService extends Component<ICalendarService,ICalendarServiceState>{

  constructor(props: ICalendarService){
    super(props);
    this.createCalendar = this.createCalendar.bind(this);
    this.state = {
      currentDate: new Date(),
    }
  }

  // eslint-disable-next-line class-methods-use-this
  createCalendar({type='month',isShowHolidays=true,startWeekFrom='Mo'}: ICreateCalendar): JSX.Element{
    const {currentDate} = this.state;
    
    console.log(type);
    console.log(isShowHolidays);
    console.log(startWeekFrom);
    console.log(currentDate);

    return <Calendar/>
  }
}