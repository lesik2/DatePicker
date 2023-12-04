import styled, { css } from 'styled-components';
import {IDate} from '@customTypes/index';

export const DateWrapper = styled.button<{$type: IDate['type'] }>`
  ${({theme, $type}) => css`
  background-color: ${() => {
    if ($type === 'selected') {
      return theme.colors.third;
    }

    if ($type === 'start') {
      return theme.colors.startDate;
    }

    if ($type === 'between') {
      return theme.colors.betweenDate;
    }

      return theme.colors.secondary;
    
  }};
    border: none;
    outline: none;
    display: flex;
    width: 32px;
    height: 32px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s, border-radius 0.2s;
    cursor: ${$type === 'disabled'? '':'pointer'};
    &:hover{
      background-color: ${$type === 'default'?theme.colors.hover: ''};
      border-radius: 8px;
    }
  `}
`
export const NumberOfDate = styled.p<{$type: IDate['type'] }>`
  ${({theme, $type}) => css`
  color: ${() => {
    if ($type === 'selected' || $type === 'start') {
      return theme.colors.secondary;
    }

    if ($type === 'between') {
      return theme.colors.third;
    }

    if($type === 'disabled' ){
      return theme.colors.disabled;
    }

      return theme.colors.primary;
    
  }};
    font-size: 13px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium}
    line-height: normal;
  `}

`