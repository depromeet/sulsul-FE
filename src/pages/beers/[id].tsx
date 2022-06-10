import { NextPage } from 'next';

import BeerDetailContainer from '@/containers/BeerDetailContainer';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const BeerDetailPage: NextPage = () => {
  useGtagPageView(PAGE_TITLES.BEER_DETAIL);

  return <BeerDetailContainer />;
};

export default BeerDetailPage;
