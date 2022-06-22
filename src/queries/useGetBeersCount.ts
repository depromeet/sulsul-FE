import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getBeersCount } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetBeersCount = () => {
  const user = useRecoilValue($userSession);

  return useQuery('beersCount', () => getBeersCount(!!user));
};
