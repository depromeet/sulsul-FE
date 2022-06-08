import { useQuery } from 'react-query';

import { getCountries, IContinent } from '@/apis';

export const useGetCountries = (continentId?: IContinent['id']) => {
  /** @todo recoil value 사용 */
  const user = undefined;

  const result = useQuery(
    ['countries', continentId],
    async () => await getCountries(continentId, !!user),
    {
      cacheTime: Infinity,
    },
  );

  return {
    ...result,
    countries: result.data?.contents,
  };
};
