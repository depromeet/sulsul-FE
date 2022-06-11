import { PAGE_TITLES } from '@/constants';
import BeerRequestCompleteContainer from '@/containers/BeerRequestCompleteContainer';
import { useGtagPageView } from '@/hooks';

const BeerRequestCompletePage = () => {
  useGtagPageView(PAGE_TITLES.BEER_REQUEST_COMPLETE);

  return <BeerRequestCompleteContainer />;
};

export default BeerRequestCompletePage;
