import { NextPage } from 'next';

import BeerListContainer from '@/containers/BeerListContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const BeerListPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.BEER_LIST);

  return <BeerListContainer />;
};

export default BeerListPage;
