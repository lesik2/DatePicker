import {ClearButton} from '@components/ClearButton/index'
import {IClearButton} from '@customTypes/index'
import userEvent from '@testing-library/user-event';

import {  render, screen } from '../test.utils';

describe('ClearButton component', () => {
  let mockHandleClear: jest.Mock;
  let Props: IClearButton;
  beforeEach(()=>{
    mockHandleClear = jest.fn();
    Props = {
      handleClear: mockHandleClear,
      size: 'default',
    };
  })
  test('should render ClearButton component', () => {
    render(<ClearButton {...Props} />);
    expect(screen.getByTestId('clear-btn')).toBeInTheDocument();
  });
  test('should call handleClear after clicking on button', async()=>{
    render(<ClearButton {...Props} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockHandleClear).toHaveBeenCalledTimes(1);
  })

});