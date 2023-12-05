/* eslint-disable no-console */
import {Component} from 'react';


import { changeVisibilityOfWeekend } from './changeVisibilityOfWeekend';
import {changeTypeOfCalendar} from './changeTypeOfCalendar'
import {colorHolidaysDays} from './colorHolidaysDays'
import { Calendar } from '../components/Calendar';
import { ICalendarServiceState, IServiceCalendar } from '../types';
import {getCalendarDates} from '../utils/index';




export class CalendarService extends Component<IServiceCalendar,ICalendarServiceState>{

  constructor(props: IServiceCalendar){
    super(props);
    this.state = {
      currentDate: new Date(),
      changeDate: new Date(),
    }
    this.handlePrevDate = this.handlePrevDate.bind(this);
    this.handleNextDate = this.handleNextDate.bind(this);
    this.updateDate = this.updateDate.bind(this);
    
  }

  handlePrevDate(): void {
    this.updateDate(-1);
  }
  
  handleNextDate(): void {
    this.updateDate(1);
  }
  
  updateDate(monthDiff: number): void {
    const { changeDate } = this.state;
    const { type } = this.props;
  
    let newDate: Date | null = null;
    if (type === 'month') {
      newDate = new Date(
        changeDate.getFullYear(),
        changeDate.getMonth() + monthDiff,
        changeDate.getDate()
        );
    } else if (type === 'week') {
      newDate = new Date(
        changeDate.getFullYear(), 
        changeDate.getMonth(), 
        changeDate.getDate() + (7 * monthDiff)
      );
    }

    if(newDate){
      this.setState({ changeDate: newDate });
    }

  }

  render(): JSX.Element{
    const {currentDate, changeDate} = this.state;
    const {type='month', isShowHolidays=true, startWeekFrom='Mo', isColorHolidays = true} = this.props;
    const dates = getCalendarDates(changeDate, startWeekFrom, currentDate);
    const DecoratedCalendar = colorHolidaysDays(
      changeTypeOfCalendar(
        changeVisibilityOfWeekend(
          Calendar
          )
        )
      )

    return (
        <DecoratedCalendar  
          type={type} 
          isShowHolidays={isShowHolidays} 
          isColorHolidays={isColorHolidays}
          startWeekFrom={startWeekFrom}
          date={changeDate}
          dates={dates} 
          handlePrevDate = {this.handlePrevDate}
          handleNextDate = {this.handleNextDate}       
        />
    )
  }

}