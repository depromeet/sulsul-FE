import { NextPage } from 'next';

import PrivacyPolicyContainer from '@/containers/PrivacyPolicyContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const PrivacyPolicyPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.PRIVACY_POLICY);

  return <PrivacyPolicyContainer />;
};

export default PrivacyPolicyPage;
