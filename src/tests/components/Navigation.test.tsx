import {INavigation, Navigation} from '@components/Navigation/index'
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event'

import {  render, screen } from '../test.utils';

describe('Navigation component', () => {
  

  test('should render Navigation component', () => {
    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: false,
      isDisableNext: false,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
  test('should display next and prev buttons', () => {
    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: false,
      isDisableNext: false,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('next-btn')).toBeInTheDocument();
    expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
  });
  test('buttons should not be disabled', () => {
    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: false,
      isDisableNext: false,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
    expect(screen.getByTestId('next-btn')).not.toBeDisabled();
    expect(screen.getByTestId('prev-btn')).not.toBeDisabled();
  });
  test('should display month and year', ()=>{
    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: false,
      isDisableNext: false,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
    const title = screen.queryByText('December 2023');
    expect(title).toBeInTheDocument();
  });
  test('should disable buttons', () => {

    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: true,
      isDisableNext: true,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
  
    expect(screen.getByTestId('prev-btn')).toBeDisabled();
    expect(screen.getByTestId('next-btn')).toBeDisabled();
  });
  test('should not call handleNextDate and handlePrevDate if buttons are disabled', () => {

    const mockHandleNextDate = jest.fn();
    const mockHandlePrevDate = jest.fn();

    const navProps: INavigation = {
      month: 'December',
      year: 2023,
      handleNextDate: mockHandleNextDate,
      handlePrevDate: mockHandlePrevDate,
      isDisablePrev: true,
      isDisableNext: true,
      size: 'default'
    };

    render(<Navigation {...navProps} />);
    userEvent.click(screen.getByTestId('prev-btn'));
    expect(mockHandlePrevDate).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByTestId('next-btn'));
    expect(mockHandleNextDate).toHaveBeenCalledTimes(0);
  });
  
});