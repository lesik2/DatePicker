import styled, { css } from 'styled-components';
import { ISize } from '@customTypes/models';


export const Wrapper = styled.div<{$size:  ISize}>`
 ${({ theme, $size }) => css`
    display: flex;
    align-items: center;
    padding: 8px ${theme.chooseSize($size).paddingDateInput}px;
    height: ${theme.chooseSize($size).heightOfDateInput}px;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.secondary};
    margin-bottom: 8px;
    position: relative;
`};
`
export const IconCalendar = styled.img<{$size: ISize}>`

  ${({ theme, $size }) => css`
    width: ${theme.chooseSize($size).iconsWidth}px;
    height: ${theme.chooseSize($size).iconsWidth}px;
`};
`
export const ClearBtn = styled.button`
 ${({ theme }) => css`
    width: 16px;
    height: 16px;
    border: none;
    outline: none;
    transition: transform 0.2s;
    padding: 0px;
    background-color: ${theme.colors.secondary};
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
`};
`
export const IconClear = styled.img`
  width: 100%;
  height: 100%;
`
export const Input = styled.input<{$size: ISize}>`
 ${({ theme, $size }) => css`
  color: ${theme.colors.default};
  font-size: ${theme.chooseSize($size).fontSizeOfWeekday}px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: ${theme.chooseSize($size).widthOfDateInput}px;
  height: 20px;
  outline: none;
  border:none;
  &::placeholder{
    color: ${theme.colors.placeholder};
  }
`};

`