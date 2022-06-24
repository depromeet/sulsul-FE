import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getBeerTypes } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetBeerTypes = () => {
  const user = useRecoilValue($userSession);

  const result = useQuery('beerTypes', () => getBeerTypes(!!user), {
    cacheTime: Infinity,
  });

  return {
    ...result,
    beerTypes: result.data?.contents,
  };
};
