import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { lightTheme, GlobalStyle } from '@/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />;
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
