import { NextPage } from 'next';

import { PAGE_TITLES } from '@/constants';
import { useGtagPageView } from '@/hooks';
import SignUpContainer from '@/containers/SignUpContainer';

const SignUpPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.LOGIN);

  return <SignUpContainer />;
};

export default SignUpPage;
