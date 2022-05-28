import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';

import awesome from '@/utils/awesome';
import { theme, GlobalStyle } from '@/themes';
import MainLayout from '@/components/MainLayout';
import queryClient from '@/configs/queryClient';

awesome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
