import {DateInput} from '@components/DateInput/index'
import {IDateInput} from '@customTypes/index'
import userEvent from '@testing-library/user-event';

import {  render, screen, waitFor, } from '../test.utils';

describe('DateInput component', () => {
  let mockHandleSearchCalendar: jest.Mock;
  let Props: IDateInput;
  beforeEach(()=>{
    // eslint-disable-next-line no-console
    mockHandleSearchCalendar = jest.fn((searchDate: Date)=>searchDate);
    Props = {
      handleSearchCalendar: mockHandleSearchCalendar,
      size: 'default'
    };
  })
  test('should render DateInput component', () => {
    render(<DateInput {...Props} />);
    expect(screen.getByTestId('date-input')).toBeInTheDocument();
  });
  test('should show tooltip if input is focused', async()=>{
    render(<DateInput {...Props} />);
    await userEvent.click(screen.getByRole('textbox'));
    await waitFor(() => expect(screen.getByTestId('tooltip')).toBeVisible());
  })
  test('should type text in input',async()=>{
    render(<DateInput {...Props} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, '12/01/2024');
    expect(input.value).toBe('12/01/2024');
  })
  test('should clear text after clicking on delete button',async()=>{
    render(<DateInput {...Props} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    const removeBtn = screen.getByRole('button');
    await userEvent.type(input, '12/01/2024');
    expect(input.value).toBe('12/01/2024');
    await userEvent.click(removeBtn);
    expect(input.value).toBe('');
  })
  test('should call handleSearchCalendar if text has format day/month/year ',async()=>{
    render(<DateInput {...Props} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, '12/01/2024');
    expect(mockHandleSearchCalendar).toHaveBeenCalled();

  })
  test('should  not call handleSearchCalendar if text has not format day/month/year ',async()=>{
    render(<DateInput {...Props} />);
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.type(input, '12/1d/2024');
    expect(mockHandleSearchCalendar).not.toHaveBeenCalled();
  })

});