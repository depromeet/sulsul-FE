import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import { theme, GlobalStyle } from '@/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
