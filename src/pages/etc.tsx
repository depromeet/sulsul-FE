import { NextPage } from 'next';

import EtcContainer from '@/containers/EtcContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const EtcPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.ETC);

  return <EtcContainer />;
};

export default EtcPage;
