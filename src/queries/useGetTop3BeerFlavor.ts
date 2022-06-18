import { useQuery } from 'react-query';

import { getTop3BeerFlavor, IBeer, ITop3BeerFlavor } from '@/apis';

export const useGetTop3BeerFlavor = (beerId: IBeer['id'], initialData?: ITop3BeerFlavor[]) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const user = undefined;

  const result = useQuery(['beerFlavor', beerId], () => getTop3BeerFlavor(beerId, !!user), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
