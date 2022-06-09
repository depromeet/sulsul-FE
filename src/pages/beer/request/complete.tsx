import BeerRequestCompleteContainer from '@/containers/BeerRequestCompleteContainer';
import { useGtagPageView } from '@/hooks';

const BeerRequestCompletePage = () => {
  useGtagPageView('맥주요청 완료');

  return <BeerRequestCompleteContainer />;
};

export default BeerRequestCompletePage;
