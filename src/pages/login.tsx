import { useRouter } from 'next/router';

import LoginContainer from '@/containers/LoginContainer';

const LoginPage = () => {
  const router = useRouter();
  const {
    query: { step = 1 },
  } = router;

  return <LoginContainer step={Number(step)} />;
};

export default LoginPage;
