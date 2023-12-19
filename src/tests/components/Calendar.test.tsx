import {CalendarService} from '@containers/index'
import {IServiceCalendar} from '@customTypes/calendar'
import {DATE_CONSTANTS} from '@constants/index'
import userEvent from '@testing-library/user-event';
import { theme } from '@constants/theme';

import {  render, screen } from '../test.utils';


jest.mock('@hooks/useHolidays', () => ({
  useHolidays: jest.fn(() => [
      {
        date: '2023-01-01',
        localName: 'New Year\'s Day',
        name: 'New Year\'s Day',
        countryCode: 'US',
      },
      {
        date: '2023-12-25',
        localName: 'Christmas Day',
        name: 'Christmas Day',
        countryCode: 'US',
      },
    ]),
}));

describe('Calendar component', () => {
  let Props: IServiceCalendar;
  beforeEach(()=>{
    Props = {
      type: 'month',
      isShowWeekend: true,
      startWeekFrom: 'Mo',
      min: '15/09/2022',
      max: '01/01/2025',
      isColorHolidays: true,
      color: 'default',
      defaultRange: true,
    };
  })
  test('should render Calendar component', () => {
    render(<CalendarService {...Props} />);
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
  });
  test('should render 7 date cells for type=week', () => {
    Props={...Props, type: 'week'}
    render(<CalendarService {...Props} />);
    expect(screen.getByTestId('main').children.length).toBe(DATE_CONSTANTS.DAYS_IN_WEEK);
  });
  test('should render 12 calendars for type=year', () => {
    Props={...Props, type: 'year'}
    render(<CalendarService {...Props} />);
    expect(screen.getByTestId('calendar-year').children.length).toBe(DATE_CONSTANTS.MONTH_IN_YEAR);
  });
  test('should render more than 28 date cells for type=month', () => {
    Props={...Props, type: 'month'}
    render(<CalendarService {...Props} />)
    expect(screen.getByTestId('main').children.length).toBeGreaterThan(28);
  });
  test('should change date after typing in input with valid format(day/month/year)', async()=>{
    render(<CalendarService {...Props} />)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);
    expect(title).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), '01/01/2024');
    expect(screen.queryByText('January 2024'));
  })
  test('should  not change date after typing in input invalid format(day/month/year)', async()=>{
    render(<CalendarService {...Props} />)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);
    expect(title).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), '01/13/2024');
    expect(title).toBeInTheDocument();
  })
  test('should  not change date after typing in input date larger than max', async()=>{
    render(<CalendarService {...Props} />)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);
    expect(title).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), '15/07/2030');
    expect(title).toBeInTheDocument();
  })
  test('should  not change date after typing in input date less than min', async()=>{
    render(<CalendarService {...Props} />)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);
    expect(title).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), '15/07/1999');
    expect(title).toBeInTheDocument();
  })
  test('after clicking on navigation buttons should move 7 days if type=week', async ()=>{
    Props={...Props, type: 'week'}
    render(<CalendarService {...Props} />)
    const currentDate = new Date();
    expect(screen.getByText(currentDate.getDate())).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('next-btn'));
    currentDate.setDate(currentDate.getDate()+7);
    expect(screen.getByText(currentDate.getDate())).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('prev-btn'));
    currentDate.setDate(currentDate.getDate()-7);
    expect(screen.getByText(currentDate.getDate())).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('prev-btn'));
    currentDate.setDate(currentDate.getDate()-7);
    expect(screen.getByText(currentDate.getDate())).toBeInTheDocument();
  })
  test('after clicking on navigation buttons should change month(year)', async ()=>{
    render(<CalendarService {...Props} />)

    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);

    expect(title).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('next-btn'));
    currentDate.setMonth(currentDate.getMonth()+1);
    year = currentDate.getFullYear();
    month = currentDate.toLocaleString('en-US', { month: 'long' });

    expect(screen.queryByText(`${month} ${year}`))

    await userEvent.click(screen.getByTestId('prev-btn'));

    currentDate.setMonth(currentDate.getMonth()-1);
    year = currentDate.getFullYear();
    month = currentDate.toLocaleString('en-US', { month: 'long' });

    expect(screen.queryByText(`${month} ${year}`))
  })
  test('should not change month(year) if navigation buttons is disabled', async ()=>{
    Props={...Props, max:'01/01/2024'};
    render(<CalendarService {...Props} />)

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const title = screen.queryByText(`${month} ${year}`);

    expect(title).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('next-btn'));
    expect(screen.queryByText(`${month} ${year}`))

    await userEvent.click(screen.getByTestId('next-btn'));
    expect(screen.queryByText(`${month} ${year}`))
  })
  test('should remove default range picker after clicking on clear button and should be possible to set new one', async() => {
    render(<CalendarService {...Props} />);
    const clearBtn = screen.getByTestId('clear-btn');
    await userEvent.click(clearBtn);
    const startDate = screen.getByText('10');
    await userEvent.click(startDate);
    expect(startDate).toHaveStyle(`color:rgb(255, 255, 255)`);
    const endDate = screen.getByText('14');
    await userEvent.click(endDate);
    const betweenDate = screen.getByText('13');
    expect(endDate).toHaveStyle(`color:rgb(255, 255, 255)`);
    expect(betweenDate).toHaveStyle(`color:${theme.colors.chooseColor('default').third}`);
    await userEvent.click(screen.getByTestId('clear-btn'));
    expect(startDate).toHaveStyle(`color: ${theme.colors.primary}`);
    expect(endDate).toHaveStyle(`color: ${theme.colors.primary}`);
    expect(betweenDate).toHaveStyle(`color: ${theme.colors.primary}`);
  });
  

});