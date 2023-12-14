import styled, { css } from 'styled-components';

import { ISize } from '@//types';
import { theme } from '@//constants/theme';

export const Wrapper = styled.div<{$showHolidays?: boolean, $size: ISize }>`
  ${({$showHolidays,$size}) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(${$showHolidays? theme.chooseSize($size).columnWithWeekend: theme.chooseSize($size).columnWithWeekend}px, 100%), 1fr));
    justify-items: center;
    align-items: center;
    width: ${theme.chooseSize($size).contentCalendar}px;
  `}

`