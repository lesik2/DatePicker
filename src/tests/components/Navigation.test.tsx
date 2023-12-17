import { Navigation} from '@components/Navigation/index'
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event'
import { INavigation } from '@customTypes/index';

import {  render, screen } from '../test.utils';

describe('Navigation component', () => {
  let navProps: INavigation;
  let mockHandleNextDate: jest.Mock;
  let mockHandlePrevDate: jest.Mock;
  beforeEach(()=>{
     mockHandleNextDate = jest.fn();
     mockHandlePrevDate = jest.fn();
     navProps = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: false,
      isDisableNext: false,
      size: 'default'
    };
  })
  test('should render Navigation component', () => {
    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
  test('should display next and prev buttons', () => {
    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('next-btn')).toBeInTheDocument();
    expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
  });
  test('buttons should not be disabled', () => {
    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('next-btn')).not.toBeDisabled();
    expect(screen.getByTestId('prev-btn')).not.toBeDisabled();
  });
  test('should call handleNextDate after clicking on next button', async () => {
    render(<Navigation {...navProps} />);
    await userEvent.click(screen.getByTestId('next-btn'));
    expect(mockHandleNextDate).toHaveBeenCalled();
    
  });
  test('should call handlePrevDate after clicking on prev button', async() => {
    render(<Navigation {...navProps} />);
    await userEvent.click(screen.getByTestId('prev-btn'));
    expect(mockHandlePrevDate).toHaveBeenCalled();
  });
  test('should display month and year', ()=>{
    render(<Navigation {...navProps} />);
    const title = screen.queryByText('December 2023');
    expect(title).toBeInTheDocument();
  });
  test('should disable buttons', () => {
    navProps={...navProps, isDisableNext: true, isDisablePrev: true};
    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('prev-btn')).toBeDisabled();
    expect(screen.getByTestId('next-btn')).toBeDisabled();
  });
  test('should not call handleNextDate and handlePrevDate if buttons are disabled', async () => {
    navProps={...navProps, isDisableNext: true, isDisablePrev: true};
    render(<Navigation {...navProps} />);
    await userEvent.click(screen.getByTestId('prev-btn'));
    expect(mockHandlePrevDate).toHaveBeenCalledTimes(0);
    await userEvent.click(screen.getByTestId('next-btn'));
    expect(mockHandleNextDate).toHaveBeenCalledTimes(0);
  });
  
});