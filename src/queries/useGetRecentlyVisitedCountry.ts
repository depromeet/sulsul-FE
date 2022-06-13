import { useQuery } from 'react-query';

import { getRecentlyVisitedCountry, IRecentlyVisitedCountry } from '@/apis';

export const useGetRecentlyVisitedCountry = (initialData?: IRecentlyVisitedCountry) => {
  const result = useQuery('recentlyVisitedCountry', () => getRecentlyVisitedCountry(), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
