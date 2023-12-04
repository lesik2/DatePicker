import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{$showHolidays?: boolean }>`
  ${({$showHolidays}) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(${$showHolidays?'32px': '46px'}, 100%), 1fr));
    justify-items: center;
    align-items: center;
    width: 230px;
  `}

`