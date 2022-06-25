import { ThemeProvider } from '@emotion/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClientProvider } from 'react-query';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { useEffect, useMemo } from 'react';

import { getUser, IUser, refreshTokenUseHeader } from '@/apis/user';
import { $userSession } from '@/recoil/atoms';
import { initAxiosConfig } from '@/configs/axios';
import awesome from '@/utils/awesome';
import mutedConsole from '@/utils/muteConsole';
import { theme, GlobalStyle } from '@/themes';
import queryClient from '@/configs/queryClient';
import MainLayout from '@/components/layouts/MainLayout';
import ErrorBoundary, { ErrorPage } from '@/components/ErrorBoundary';
import { setAuthHeader } from '@/utils/auth';

awesome();
initAxiosConfig();

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

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const {
          config,
          response: { status },
        } = error;
        if (status === 419) {
          if (error.response.data.code === 'expired') {
            const originalRequest = config;
            const _refreshToken = undefined;
            // token refresh 요청
            await refreshTokenUseHeader(); // token refresh api
            // 새로운 accessToken 저장
            //originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
            // 419로 요청 실패했던 요청 새로운 토큰으로 재요청
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );
  }, []);

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
  console.log(cookie);
  let user: IUser | undefined;

  axios.defaults.headers.common['Cookie'] = '';
  if (cookie) {
    axios.defaults.headers.common['Cookie'] = cookie;

    user = await getUser();
  }
  if (!user) {
    setAuthHeader(ctx);
  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, userSession: user };
};

export default MyApp;
