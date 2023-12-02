import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-family: ${theme.fontFamily.font};
    width: 250px;
    
`};

`