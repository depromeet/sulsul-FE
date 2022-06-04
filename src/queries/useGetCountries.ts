import { useQuery } from 'react-query';

import { getCountries, IContinent } from '@/apis';

export const useGetCountries = (continentId?: IContinent['id']) => {
  const result = useQuery(['countries', continentId], async () => await getCountries(continentId), {
    cacheTime: Infinity,
  });

  return {
    ...result,
    countries: result.data?.contents,
  };
};
