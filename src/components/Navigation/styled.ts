import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 230px;
  padding: 5px 0px;
  justify-content: space-between;
  align-items: center;
`
export const NavButton = styled.button<{$isDisabled?: boolean}>`
  ${({ theme, $isDisabled }) => css`
  border: none;
  outline: none;
  background-color: ${theme.colors.secondary};
  cursor: ${$isDisabled?'default':'pointer'};
  padding: 0px;
  height: 16px;
  width: 16px;
  transition: transform 0.3s;
  &:hover{
    transform: ${$isDisabled?'1':'1.2'};
  }
`};
`
export const Icon  = styled.img<{$isDisabled?: boolean}>`
${({ $isDisabled }) => css`
  width: 100%;
  filter: ${$isDisabled?'invert(79%) sepia(2%) saturate(11%) hue-rotate(325deg) brightness(89%) contrast(81%)':'none'};
`};

`
export const Title  = styled.h1`
${({ theme }) => css`
  color: ${theme.colors.default};
  font-size: 14px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;
  margin: 0;
`};
`