import { ThemeProvider } from '@emotion/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClientProvider } from 'react-query';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { useMemo } from 'react';
import { setCookies } from 'cookies-next';

import { getUser, IUser, refreshAccessToken } from '@/apis/user';
import { $userSession } from '@/recoil/atoms';
import { initAxiosConfig, initAxiosRefreshConfig } from '@/configs/axios';
import awesome from '@/utils/awesome';
import mutedConsole from '@/utils/muteConsole';
import { theme, GlobalStyle } from '@/themes';
import queryClient from '@/configs/queryClient';
import MainLayout from '@/components/layouts/MainLayout';
import ErrorBoundary, { ErrorPage } from '@/components/ErrorBoundary';
import { setAuthHeader } from '@/utils/auth';
import { isServer } from '@/utils/isServer';

initAxiosConfig();
awesome();

if (!isServer()) {
  initAxiosRefreshConfig();
}

// ignore in-browser next/js recoil warnings until its fixed.
global.console = mutedConsole(global.console);

interface MyAppProps extends AppProps {
  userSession?: IUser;
}

function MyApp({ Component, pageProps, userSession }: MyAppProps) {
  const recoilInitializer = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        if (userSession) {
          set($userSession, userSession);
        }
      },
    [userSession],
  );

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <NextSeo
        title="[비어에어] 같이 떠나요!"
        description="비어에어와 함께 세계 맥주를 정복해 보세요!"
        openGraph={{
          title: '[비어에어] 같이 떠나요!',
          description: '비어에어와 함께 세계 맥주를 정복해 보세요!',
          images: [{ url: 'images/beerair_og.png', width: 1200, height: 600, alt: '비어에어' }],
        }}
      />
      <RecoilRoot initializeState={recoilInitializer}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const cookie = ctx.req ? ctx.req.headers.cookie : null;

  if (process.env.NEXT_PUBLIC_LOCAL_TOKEN) {
    setCookies('accessToken', process.env.NEXT_PUBLIC_LOCAL_TOKEN, ctx);
  }

  let user: IUser | undefined;

  axios.defaults.headers.common['Cookie'] = '';
  if (cookie) {
    axios.defaults.headers.common['Cookie'] = cookie;

    user = await getUser(ctx);
  }
  if (!user) {
    setAuthHeader(ctx);
  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, userSession: user };
};

export default MyApp;
