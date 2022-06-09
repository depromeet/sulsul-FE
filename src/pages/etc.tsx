import { NextPage } from 'next';

import EtcContainer from '@/containers/EtcContainer';
import { useGtagPageView } from '@/hooks';

const EtcPage: NextPage = () => {
  useGtagPageView('프로필-기타');

  return <EtcContainer />;
};

export default EtcPage;
