import { useQuery } from 'react-query';

import { getBeersRecommend } from '@/apis';

export const useGetBeersRecommend = () => {
  const result = useQuery('beersRecommend', getBeersRecommend);

  return {
    ...result,
    contents: result.data?.contents,
  };
};
