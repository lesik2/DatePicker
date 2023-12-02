import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 230px;
  padding: 5px 0px;
  justify-content: space-between;
  align-items: center;
`
export const NavButton = styled.button`
  ${({ theme }) => css`
  border: none;
  outline: none;
  background-color: ${theme.colors.secondary};
  cursor: pointer;
  height: 16px;
  width: 16px;
  padding: 0px;
`};
`
export const Icon  = styled.img`
  width: 100%;
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