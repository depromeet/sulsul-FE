import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getContinents } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetContinents = () => {
  const user = useRecoilValue($userSession);

  return useQuery('continents', () => getContinents(!!user), { cacheTime: Infinity });
};
