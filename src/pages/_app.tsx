import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import awesome from '@/utils/awesome';
import { theme, GlobalStyle } from '@/themes';
import MainLayout from '@/components/MainLayout';

awesome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
