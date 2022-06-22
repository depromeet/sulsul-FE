import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getBeer, IBeer } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetBeer = (beerId: IBeer['id'], initialData?: IBeer) => {
  const user = useRecoilValue($userSession);

  const result = useQuery(['beer', beerId], () => getBeer(beerId, !!user), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
