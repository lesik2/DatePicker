import {Weekday} from '@components/Weekday/index'
import {IWeekday} from '@customTypes/index'


import {  render, screen, } from '../test.utils';

describe('Weekend component', () => {

  let Props: IWeekday;
  beforeEach(()=>{
    Props = {
      startWeekFrom:'Mo',
      showHolidays:true,
      size: 'default'
    };
  })
  test('should render Weekend component', () => {
    render(<Weekday {...Props} />);
    expect(screen.getByTestId('weekday')).toBeInTheDocument();
  });
  test('should show weekend days',()=>{
    render(<Weekday {...Props} />);
    expect(screen.getByText('Sa')).toBeInTheDocument();
    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByTestId('weekday').children.length).toBe(7);
  })
  test('should not show weekend(Sa,Su) days if showHolidays = false',()=>{
    Props={...Props, showHolidays: false};
    render(<Weekday {...Props} />);
    expect(screen.getByTestId('weekday').children.length).toBe(5);
    expect(screen.queryByText('Sa')).not.toBeInTheDocument();
    expect(screen.queryByText('Su')).not.toBeInTheDocument();
  })
  test('should start weekend from Monday',()=>{
    render(<Weekday {...Props} />);
    const firstDay = screen.getByTestId('weekday').children[0];
    const firstDayText = firstDay.textContent;
    expect(firstDayText).toBe('Mo');
  })
  test('should start weekend from Sunday',()=>{
    Props = {...Props, startWeekFrom: 'Su'};
    render(<Weekday {...Props} />);
    const firstDay = screen.getByTestId('weekday').children[0];
    const firstDayText = firstDay.textContent;
    expect(firstDayText).toBe('Su');
  })

});