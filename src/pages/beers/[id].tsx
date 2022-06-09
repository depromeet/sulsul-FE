import { NextPage } from 'next';

import BeerDetailContainer from '@/containers/BeerDetailContainer';
import { useGtagPageView } from '@/hooks';

const BeerDetailPage: NextPage = () => {
  useGtagPageView('맥주 상세정보');

  return <BeerDetailContainer />;
};

export default BeerDetailPage;
