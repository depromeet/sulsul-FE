import { useQuery } from 'react-query';

import { getBeersLiked } from '@/apis';

export const useGetBeersLiked = () => {
  const result = useQuery('beersLiked', () => getBeersLiked());

  return {
    ...result,
    contents: result.data?.contents,
  };
};
