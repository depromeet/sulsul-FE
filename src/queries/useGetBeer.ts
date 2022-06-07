import { useQuery } from 'react-query';

import { getBeer, IBeer } from '@/apis';

export const useGetBeer = (beerId: IBeer['id']) => {
  const result = useQuery(['beer', beerId], () => getBeer(beerId), {
    cacheTime: Infinity,
  });

  return {
    ...result,
    beer: result.data?.contents,
  };
};
