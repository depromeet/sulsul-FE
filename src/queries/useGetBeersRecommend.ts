import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { getBeersRecommend } from '@/apis';
import { $userSession } from '@/recoil/atoms';

export const useGetBeersRecommend = () => {
  const user = useRecoilValue($userSession);

  const result = useQuery('beersRecommend', () => getBeersRecommend(!!user), {
    refetchOnMount: false,
  });

  return {
    ...result,
    contents: result.data,
  };
};
