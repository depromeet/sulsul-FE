import { NextPage } from 'next';

import TermsOfServiceContainer from '@/containers/TermsOfServiceContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const TermsOfServicePage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.TERMS_OF_SERVICE);

  return <TermsOfServiceContainer />;
};

export default TermsOfServicePage;
