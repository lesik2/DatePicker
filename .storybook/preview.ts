import type { Preview } from '@storybook/react';

import {  ThemeProvider } from 'styled-components';
import  { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { theme } from '../src/constants/theme';
import GlobalStyle from '../src/globalStyles'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [
  withThemeFromJSXProvider({
    themes: {myTheme: theme},
    defaultTheme: 'myTheme',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
    })
]
export default preview;
