import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{$isOpen?: boolean}>`
  ${({theme, $isOpen}) => css`
    position: absolute;
    left: 0px;
    top: -30px;
    z-index: ${theme.zIndex.tooltip};
    width: 100%;
    opacity: ${$isOpen?'1': '0'};
    visibility: ${$isOpen?'visible':'hidden'};
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${theme.colors.secondary};
    transition: opacity 0.4s, visibility 0.4s;
    border: 1px solid ${theme.colors.border};
  `}

`
export const Text = styled.h3`
${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
  `}
`