import { NextPage } from 'next';

import TermsOfServiceContainer from '@/containers/TermsOfServiceContainer';
import { useGtagPageView } from '@/hooks';

const TermsOfServicePage: NextPage = () => {
  useGtagPageView('이용약관');

  return <TermsOfServiceContainer />;
};

export default TermsOfServicePage;
