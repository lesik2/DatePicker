import {DateCell} from '@components/Date/index'
import {IDateComponent} from '@customTypes/index'

import {  render, screen } from '../test.utils';

describe('Navigation component', () => {
  

  test('should render Date component', () => {
    const mockIncrementOfClicks = jest.fn((numberOfDate: number)=>numberOfDate);


    const Props: IDateComponent = {
      incrementOfClicks: mockIncrementOfClicks,
      color: 'default',
      size: 'default',
      date: new Date(),
      holiday: false,
      dateNumber: new Date().getDate(),
      type: 'default'
    };

    render(<DateCell {...Props} />);
    expect(screen.getByTestId('date-cell')).toBeInTheDocument();
  });
 
  
});