import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fontsource/open-sans";

const GlobalStyle = createGlobalStyle`
    *, *::before,*::after {
      box-sizing: border-box;
    }
    ol, ul {
      list-style: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;
