import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-family: ${theme.fontFamily.font};

`};
`
export const YearWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px), 1fr));
    justify-items: center;
    align-items: start;
    grid-row-gap: 20px;
    width: 800px;
`
export const CalendarWrapper = styled.div<{$clear?: boolean}>`
 ${({ theme, $clear }) => css`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-family: ${theme.fontFamily.font};
    width: 250px;
    border-radius: ${$clear?'8px 8px 0px 0px':'8px'};
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.secondary};
    position: relative;
    
`};
`