import styled, { css } from 'styled-components';


export const ClearBtn = styled.button`
 ${({ theme }) => css`
  border-radius: 0px 0px 8px 8px;
  border: 1px solid ${theme.colors.border};
  display: flex;
  width: 250px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  line-height: normal;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover{
    background-color: ${theme.colors.hover}
  }
`};
`