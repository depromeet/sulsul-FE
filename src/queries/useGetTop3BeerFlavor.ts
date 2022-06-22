import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getTop3BeerFlavor, IBeer, ITop3BeerFlavor } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetTop3BeerFlavor = (beerId: IBeer['id'], initialData?: ITop3BeerFlavor[]) => {
  const user = useRecoilValue($userSession);

  const result = useQuery(['beerFlavor', beerId], () => getTop3BeerFlavor(beerId, !!user), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
