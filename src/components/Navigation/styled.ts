import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 230px;
  padding: 5px 0px;
  justify-content: space-between;
  align-items: center;
`
export const NavButton = styled.button`
  border: none;
  outline: none;
`
export const Icon  = styled.img`
  width: 16px;
  height: 16px;
`
export const Title  = styled.h1`
${({ theme }) => css`
  color: ${theme.colors.default}
  font-size: 14px;
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  line-height: normal;
`};
`