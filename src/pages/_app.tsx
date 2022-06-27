import { ThemeProvider } from '@emotion/react';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { QueryClientProvider } from 'react-query';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { useMemo } from 'react';
import { setCookies, removeCookies } from 'cookies-next';

import { getUser, IUser, refreshAccessToken } from '@/apis/user';
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

  // 개발환경에서는 자신의 토큰을 넣어주세요
  setCookies(
    'accessToken',
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNjU2MTgwMDM2LCJleHAiOjE2NTYyNjY0MzZ9.eBZ4otp-YlurqKHt3QMCAocjSpxOBj64XXuuWVXsHeFG3hohYFMb3WNcrz4HjbklY1_ADHkj_UFQegN77i1uoA',
    ctx,
  );

  let user: IUser | undefined;

  axios.defaults.headers.common['Cookie'] = '';
  if (cookie) {
    axios.defaults.headers.common['Cookie'] = cookie;

    user = await getUser();
  }
  if (!user) {
    setAuthHeader(ctx);
  }

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        const originalRequest = config;
        // refreshToken으로 accessToken 갱신
        await refreshAccessToken();
        // 401로 요청 실패했던 요청 새로운 토큰으로 재요청
        return axios(originalRequest);
      }
      return Promise.reject(error);
    },
  );

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, userSession: user };
};

export default MyApp;
