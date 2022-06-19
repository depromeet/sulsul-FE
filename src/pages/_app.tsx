import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClientProvider } from 'react-query';
import axios from 'axios';
import { NextSeo } from 'next-seo';

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
    <>
      <NextSeo
        title="[비어에어] 같이 떠나요!"
        description="비어에어와 함께 세계 맥주를 정복해 보세요!"
        openGraph={{
          title: '[비어에어] 같이 떠나요!',
          description: '비어에어와 함께 세계 맥주를 정복해 보세요!',
          images: [{ url: 'images/beerair_og.png', width: 1200, height: 600, alt: '비어에어' }],
        }}
      />
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
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const cookie = ctx.req ? ctx.req.headers.cookie : null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (axios.defaults.headers as any).Cookie = '';
  if (cookie) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (axios.defaults.headers as any).Cookie = cookie;
  }
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
