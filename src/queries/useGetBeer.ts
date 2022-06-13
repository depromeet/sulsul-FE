import { useQuery } from 'react-query';

import { getBeer, IBeer } from '@/apis';

export const useGetBeer = (beerId: IBeer['id'], initialData?: IBeer) => {
  const result = useQuery(['beer', beerId], () => getBeer(beerId), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
