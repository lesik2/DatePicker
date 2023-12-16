import styled, { css } from 'styled-components';
import { ISize } from '@customTypes/models';

export const Wrapper = styled.div<{$size: ISize}>`
  ${({ $size, theme}) => css`
    display: flex;
    width: ${theme.chooseSize($size).contentCalendar}px; 
  `}

`
export const WeekDayCell = styled.div<{$showHolidays?: boolean, $size: ISize}>`
    ${({$showHolidays, $size, theme}) => css`
      display: flex;
      height: 32px;
      width: ${$showHolidays? theme.chooseSize($size).columnWithWeekend: theme.chooseSize($size).columnWithoutWeekend}px;
      padding: 10px;
      justify-content: center;
      align-items: center;
  `}
`
export const WeekDayText = styled.p<{$size: ISize}>`
  ${({theme, $size}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.chooseSize($size).fontSizeOfWeekday}px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
  `}
`