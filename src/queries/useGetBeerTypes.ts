import { useQuery } from 'react-query';

import { getBeerTypes } from '@/apis';

export const useGetBeerTypes = () => {
  /** @todo recoil value 사용 */
  const user = undefined;

  const result = useQuery('beerTypes', () => getBeerTypes(!!user), {
    cacheTime: Infinity,
  });

  return {
    ...result,
    beerTypes: result.data?.contents,
  };
};
