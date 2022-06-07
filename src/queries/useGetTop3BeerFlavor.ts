import { useQuery } from 'react-query';

import { getTop3BeerFlavor, IBeer } from '@/apis';

export const useGetTop3BeerFlavor = (beerId: IBeer['id']) => {
  const result = useQuery(['beerFlavor', beerId], () => getTop3BeerFlavor(beerId), {
    cacheTime: Infinity,
  });

  return {
    ...result,
    beerFlavor: result.data?.contents,
  };
};
