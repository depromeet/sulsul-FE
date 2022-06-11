import { useQuery } from 'react-query';

import { getBeersRecommend } from '@/apis';

export const useGetBeersRecommend = () => {
  /** @todo recoil value 사용 */
  const user = undefined;

  const result = useQuery('beersRecommend', () => getBeersRecommend(!!user), {
    refetchOnMount: false,
  });

  return {
    ...result,
    contents: result.data,
  };
};
