import styled, { css } from 'styled-components';
import { ISize } from '@customTypes/models';

export const Wrapper = styled.div<{$size: ISize}>`
  ${({ theme, $size }) => css`
  display: flex;
  width: ${theme.chooseSize($size).contentCalendar}px;
  padding: 5px 0px;
  justify-content: space-between;
  align-items: center;
`};
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
    transform: ${$isDisabled?'scale(1)':'scale(1.2)'};
  }
`};
`
export const Icon  = styled.img<{$isDisabled?: boolean}>`
${({ $isDisabled }) => css`
  width: 100%;
  filter: ${$isDisabled?'invert(79%) sepia(2%) saturate(11%) hue-rotate(325deg) brightness(89%) contrast(81%)':'none'};
`};

`
export const Title  = styled.h1<{$size: ISize}>`
${({ theme, $size }) => css`
  color: ${theme.colors.default};
  font-size: ${theme.chooseSize($size).fontSizeOfWeekday}px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;
  margin: 0;
`};
`