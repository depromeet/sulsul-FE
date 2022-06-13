import { useRouter } from 'next/router';

import LoginContainer from '@/containers/LoginContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const LoginPage = () => {
  useGtagPageView(PAGE_TITLES.LOGIN);

  return <LoginContainer />;
};

export default LoginPage;
