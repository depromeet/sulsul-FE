import { Global, css } from '@emotion/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'emotion-theming';
import { RecoilRoot } from 'recoil';
import { RouterContext } from "next/dist/shared/lib/router-context";

import { theme, GlobalStyle } from '../src/themes';

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
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Design System', 'Commons', 'Components', 'Pages'],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Global
          styles={css`
            html,
            #root {
              height: 100%;
            }

            body {
              height: 100%;
              padding: 0 !important;
              background-color: ${({ theme }) => theme.semanticColor.background};
            }
          `}
        />
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
