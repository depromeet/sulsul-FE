import { NextPage } from 'next';

import BeerListContainer from '@/containers/BeerListContainer';
import { useGtagPageView } from '@/hooks';

const BeerListPage: NextPage = () => {
  useGtagPageView('맥주 목록');

  return <BeerListContainer />;
};

export default BeerListPage;
