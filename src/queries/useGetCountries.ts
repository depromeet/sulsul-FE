import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getCountries, IContinent } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetCountries = (continentId?: IContinent['id']) => {
  const user = useRecoilValue($userSession);

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
