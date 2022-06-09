import { useRouter } from 'next/router';

import LoginContainer from '@/containers/LoginContainer';
import { useGtagPageView } from '@/hooks';

const LoginPage = () => {
  useGtagPageView('로그인');

  const router = useRouter();
  const {
    query: { step = 1 },
  } = router;

  return <LoginContainer step={Number(step)} />;
};

export default LoginPage;
