import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClientProvider } from 'react-query';
import axios from 'axios';

import awesome from '@/utils/awesome';
import mutedConsole from '@/utils/muteConsole';
import { theme, GlobalStyle } from '@/themes';
import queryClient from '@/configs/queryClient';
import MainLayout from '@/components/layouts/MainLayout';

awesome();

// ignore in-browser next/js recoil warnings until its fixed.
global.console = mutedConsole(global.console);

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

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const cookie = ctx.req ? ctx.req.headers.cookie : null;
  if (cookie) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (axios.defaults.headers as any).Cookie = cookie;
  }
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
