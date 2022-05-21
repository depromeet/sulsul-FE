import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import { theme, GlobalStyle } from '@/themes';
import MainLayout from '@/components/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded || typeof window === 'undefined') {
    return null;
  }

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
