import { useQuery } from 'react-query';

import { getBeerTypes } from '@/apis';

export const useGetBeerTypes = () => {
  const result = useQuery('beerTypes', getBeerTypes, {
    cacheTime: Infinity,
  });

  return {
    ...result,
    beerTypes: result.data?.contents,
  };
};
