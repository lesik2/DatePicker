import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({theme}) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Close = styled.div`
  ${({theme}) => css`
    position: absolute;
    right: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${theme.colors.hover};
    }
  `}
`;
export const Image = styled.img`
    width: 19px;
    height: 19px;
`;
