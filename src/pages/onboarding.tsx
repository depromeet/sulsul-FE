import { NextPage } from 'next';

import OnBoardingContainer from '@/containers/OnBoardingContainer';
import { useGtagPageView } from '@/hooks';

const OnBoardingPage: NextPage = () => {
  useGtagPageView('시작하기');

  return <OnBoardingContainer />;
};

export default OnBoardingPage;
