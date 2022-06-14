import { useQuery } from 'react-query';

import { getBeer, IBeer } from '@/apis';

export const useGetBeer = (beerId: IBeer['id'], initialData?: IBeer) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const user = undefined;

  const result = useQuery(['beer', beerId], () => getBeer(beerId, !!user), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
