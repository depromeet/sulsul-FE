import { useRouter } from 'next/router';

import LoginContainer from '@/containers/LoginContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const LoginPage = () => {
  useGtagPageView(PAGE_TITLES.LOGIN);

  const router = useRouter();
  const {
    query: { step = 1 },
  } = router;

  return <LoginContainer step={Number(step)} />;
};

export default LoginPage;
