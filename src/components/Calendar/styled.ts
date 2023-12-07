import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-family: ${theme.fontFamily.font};
    gap: 8px;

`};
`
export const CalendarWrapper = styled.div`
 ${({ theme }) => css`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-family: ${theme.fontFamily.font};
    width: 250px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.secondary};
    position: relative;
    
`};
`