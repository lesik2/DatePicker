import {DateCell} from '@components/Date/index'
import {IDateComponent} from '@customTypes/index'
import {theme} from '@constants/theme';
import userEvent from '@testing-library/user-event';
import {CONSTANTS} from '@constants/index'

import {  render, screen, waitFor } from '../test.utils';

describe('Date component', () => {
  let mockIncrementOfClicks: jest.Mock;
  let Props: IDateComponent;
  beforeEach(()=>{
    mockIncrementOfClicks = jest.fn((numberOfDate: number)=>numberOfDate);
    Props = {
      incrementOfClicks: mockIncrementOfClicks,
      color: 'default',
      size: 'default',
      date: new Date(),
      holiday: false,
      dateNumber: new Date().getDate(),
      type: 'selected'
    };
    localStorage.clear();
  })
  test('should render Date component', () => {
    render(<DateCell {...Props} />);
    expect(screen.getByTestId('date-cell')).toBeInTheDocument();
  });
  test('should change color of number if holiday is true', () => {
    Props = {...Props, holiday: true};
    render(<DateCell {...Props} />);
    expect(screen.getByText(new Date().getDate())).toHaveStyle('color: rgb(255, 0, 0)');
  });
  test('should change color of background and color of text if type=selected', () => {
    Props={...Props,type: 'selected' }
    render(<DateCell {...Props} />);
    expect(screen.getByTestId('date-cell')).toHaveStyle(`background-color:${theme.colors.chooseColor('default').third}`);
    expect(screen.getByText(new Date().getDate())).toHaveStyle(`color:${theme.colors.secondary}`);
  });
  test('should change color of background and color of text if type=between', () => {
    Props={...Props,type: 'between' }
    render(<DateCell {...Props} />);
    expect(screen.getByTestId('date-cell')).toHaveStyle(`background-color:${theme.colors.chooseColor('default').betweenDate}`);
    expect(screen.getByText(new Date().getDate())).toHaveStyle(`color:${theme.colors.chooseColor('default').third}`);
  });
  test('should change style of calendar cell', () => {
    Props = {...Props, color: 'primary'};
    render(<DateCell {...Props} />);
    expect(screen.getByTestId('date-cell')).toHaveStyle(`background-color:${theme.colors.chooseColor('primary').third}`);
  });
  test('should call incrementOfClicks after clicking on date cell', async () => {
    render(<DateCell {...Props} />);
    await userEvent.click(screen.getByTestId('date-cell'));
    expect(mockIncrementOfClicks).toHaveBeenCalledTimes(1);
  });
  test('should show tooltip after clicking on date cell', async () => {
    render(<DateCell {...Props} />);
    userEvent.click(screen.getByTestId('date-cell'));
    await waitFor(() => expect(screen.getByTestId('tooltip')).toBeVisible());
  });
  test('should show modal with notes after double click', async () => {
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  test('should close modal after clicking on cross', async () => {
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    await userEvent.dblClick(screen.getByTestId('modal-close'));
    expect(modal).not.toBeInTheDocument();
  });
  test('modal should not include notes and should show message', async () => {
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const emptyMessage = screen.getByText(CONSTANTS.EMPTY_NOTES);
    expect(emptyMessage).toBeInTheDocument();
  });
  test('after clicking on button should add note', async ()=>{
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const modalNotes = screen.getByTestId('modal-notes');
    const emptyMessage = screen.getByText(CONSTANTS.EMPTY_NOTES);
    const addNote = screen.getByTestId('add-note');
    await userEvent.click(addNote);
    expect(modalNotes.children).toHaveLength(1);
    expect(emptyMessage).not.toBeInTheDocument();
  })
  test('should type text in input', async () => {
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const addNote = screen.getByTestId('add-note');
    await userEvent.click(addNote);
    const note: HTMLInputElement| null  = screen.queryByTestId('input-note');
    if(note){
      await userEvent.type(note, 'buy milk');
      expect(note.value).toBe('buy milk');
    }
  });
  test('after clicking on button should delete note', async ()=>{
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const modalNotes = screen.getByTestId('modal-notes');
    const emptyMessage = screen.getByText(CONSTANTS.EMPTY_NOTES);
    const addNote = screen.getByTestId('add-note');
    await userEvent.click(addNote);
    const deleteNote = screen.getByTestId('delete-note');
    expect(modalNotes.children).toHaveLength(1);
    expect(emptyMessage).not.toBeInTheDocument();
    await userEvent.click(deleteNote);
    const empty = screen.queryByText(CONSTANTS.EMPTY_NOTES);
    expect(empty).toBeInTheDocument();
    expect(screen.getByTestId('modal-notes').children.length).toBe(1);
  })
  test('should save the same notes after closing modal', async()=>{
    render(<DateCell {...Props} />);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const closeModal = screen.getByTestId('modal-close')
    const addNote = screen.getByTestId('add-note');
    await userEvent.click(addNote);
    const note: HTMLInputElement| null  = screen.queryByTestId('input-note');
    if(note){
      await userEvent.type(note, 'buy milk');
      expect(note.value).toBe('buy milk');
    }

    await userEvent.click(closeModal);
    await userEvent.dblClick(screen.getByTestId('date-cell'));
    const saveNote: HTMLInputElement = screen.getByTestId('input-note');
    expect(saveNote.value).toBe('buy milk');
  })
});