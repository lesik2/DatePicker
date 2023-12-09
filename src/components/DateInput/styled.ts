import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
 ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    height: 42px;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.secondary};
    margin-bottom: 8px;
    position: relative;
`};
`
export const IconCalendar = styled.img`
  width: 16px;
  height: 16px;
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
export const Input = styled.input`
 ${({ theme }) => css`
  color: ${theme.colors.default};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 172px;
  height: 20px;
  outline: none;
  border:none;
  &::placeholder{
    color: ${theme.colors.placeholder};
  }
`};

`