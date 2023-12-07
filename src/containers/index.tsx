import {Component} from 'react';


import { changeVisibilityOfWeekend } from './changeVisibilityOfWeekend';
import {changeTypeOfCalendar} from './changeTypeOfCalendar'
import {colorHolidaysDays} from './colorHolidaysDays'
import {disableLimit} from './disableLimit'

import { Calendar } from '../components/Calendar';
import { ICalendarServiceState, IServiceCalendar } from '../types';
import {getCalendarDates} from '../utils/index';
import {REGULAR_EXPRESSIONS} from '../constants/index'



export class CalendarService extends Component<IServiceCalendar,ICalendarServiceState>{

  constructor(props: IServiceCalendar){
    super(props);
    this.state = {
      currentDate: new Date(),
      changeDate: new Date(),
      min: this.defineLimitationsForDate(props.min),
      isDisablePrev: false,
      isDisableNext: false,
      max: this.defineLimitationsForDate(props.max),
    }
    this.handlePrevDate = this.handlePrevDate.bind(this);
    this.handleNextDate = this.handleNextDate.bind(this);
  }
  
  componentDidUpdate(_prevProps: Readonly<IServiceCalendar>,
    prevState: Readonly<ICalendarServiceState>): void {
    const { changeDate, min, max } = this.state;
    const {type} = this.props;
    if (changeDate.getTime() !== prevState.changeDate.getTime() && min && max) {
      const prevMonth = new Date(min.getFullYear(), min.getMonth()+1,0);
      const difMin = (type ==='week'?7:prevMonth.getDate()-min.getDate())* 86400000;
      const resMin = min.getTime()< changeDate.getTime()-difMin;

      const difMax = (type ==='week'?7:max.getDate())* 86400000;
      const resMax = max.getTime()>changeDate.getTime()+difMax;
      this.setState({isDisablePrev: !resMin, isDisableNext: !resMax})
    }
  }



  handlePrevDate(): void {
    this.updateDate(-1);
  }

  handleNextDate(): void {
    this.updateDate(1);
  }


  // eslint-disable-next-line class-methods-use-this
  defineLimitationsForDate(inputOfLimit: string|undefined): null| Date{
    if(inputOfLimit && REGULAR_EXPRESSIONS.dateFormatForDayMonthYear.test(inputOfLimit.trim())){
      const [day, month, year] = inputOfLimit.split('/').map((item)=>parseInt(item,10));

      const limitDate = new Date(year, month-1, day);

      return limitDate;
    }

    return null
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
    const { currentDate, changeDate, isDisableNext, isDisablePrev, min, max } = this.state;

    const {type='month', isShowHolidays=true, startWeekFrom='Mo', isColorHolidays = true} = this.props;

    const dates = getCalendarDates(changeDate, startWeekFrom, currentDate);
    
    const DecoratedCalendar = colorHolidaysDays(
        disableLimit(
        changeTypeOfCalendar(
        changeVisibilityOfWeekend(
          Calendar
          )
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
          isDisableNext={isDisableNext}
          isDisablePrev={isDisablePrev}
          min={min}
          max={max}
        />
    )
  }

}