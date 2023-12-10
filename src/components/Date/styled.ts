import styled, { css } from 'styled-components';
import {IColor, IDate} from '@customTypes/index';


export const DateWrapper = styled.button<{$type?: IDate['type'], $color: IColor }>`
  ${({theme, $type, $color}) => css`
  background-color: ${() => {
    if ($type === 'selected'|| $type === 'end') {
      return theme.colors.chooseColor($color).third;
    }

    if ($type === 'start') {
      return theme.colors.chooseColor($color).startDate;
    }

    if ($type === 'between') {
      return theme.colors.chooseColor($color).betweenDate;
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
    border-radius: ${() => {
      if ($type === 'start') {
        return '8px 0px 0px 8px';
      }

      if ($type === 'end') {
        return '0px 8px 8px 0px'
      }

      if ($type === 'between') {
        return '0px'
      }

        return '8px';
      
    }};
    transition: background-color 0.2s;
    cursor: ${$type === 'disabled'? '':'pointer'};
    &:hover{
      background-color: ${$type === 'default'?theme.colors.hover: ''};
    }
  `}
`
export const NumberOfDate = styled.p<{$type?: IDate['type'], $task?: boolean, $holiday?: boolean,$color: IColor }>`
  ${({theme, $type, $task, $holiday, $color}) => css`
    color: ${() => {
      if($holiday){
        return theme.colors.holiday;
      }

      if ($type === 'selected' || $type === 'start'||$type ==='end') {
        return theme.colors.secondary;
      }

      if ($type === 'between') {
        return theme.colors.chooseColor($color).third;
      }

      if($type === 'disabled' ){
        return theme.colors.disabled;
      }
      
        return theme.colors.primary;
      
    }};
    position:relative;
    font-size: 13px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
    &::before{
      content: '';
      position: absolute;
      display: ${$task?'block':'none'};
      width: 5px;
      height: 5px;
      top: -5px;
      right: -7px;
      border-radius: 50%;
      background-color: ${$type==='selected'|| $type ==='start'||$type==='end'?theme.colors.secondary: theme.colors.chooseColor($color).third}
    }
  `}
`
