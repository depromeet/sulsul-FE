import { NextPage } from 'next';

import OnBoardingContainer from '@/containers/OnBoardingContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const OnBoardingPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.ON_BOARDING);

  return <OnBoardingContainer />;
};

export default OnBoardingPage;
