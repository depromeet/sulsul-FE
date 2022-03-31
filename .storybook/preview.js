import { Global, css } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'emotion-theming';

import { lightTheme, darkTheme, GlobalStyle } from '../src/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Global
        styles={css`
          body {
            padding: 0 !important;
          }
        `}
      />
      <Story />
    </ThemeProvider>
  ),
];
