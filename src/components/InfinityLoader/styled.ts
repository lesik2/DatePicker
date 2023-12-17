import styled, { keyframes, css } from 'styled-components';
import { IColor } from '@customTypes/models';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div<{$color: IColor}>`
  animation: ${spin} 1s infinite;
  ${({ theme, $color }) => css`
    align-self: center;
    justify-self: center;
    height: 30px;
    width: 30px;
    border: 4px solid ${theme.colors.border};
    border-radius: 50%;
    border-right-color: ${theme.colors.chooseColor($color).third};
`};
`;
