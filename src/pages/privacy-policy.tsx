import { NextPage } from 'next';

import PrivacyPolicyContainer from '@/containers/PrivacyPolicyContainer';
import { useGtagPageView } from '@/hooks';

const PrivacyPolicyPage: NextPage = () => {
  useGtagPageView('개인정보 처리방침');

  return <PrivacyPolicyContainer />;
};

export default PrivacyPolicyPage;
