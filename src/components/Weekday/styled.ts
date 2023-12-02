import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 230px;

`
export const WeekDayCell = styled.div`
    display: flex;
    height: 32px;
    width: 32px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`
export const WeekDayText = styled.p`
  ${({theme}) => css`
  color: ${theme.colors.primary};
  font-size: 14px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;
  `}
`