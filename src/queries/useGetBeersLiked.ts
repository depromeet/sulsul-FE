import { useQuery } from 'react-query';

import { getBeersLiked, IGetBeersLikedPaylosd } from '@/apis';

export const useGetBeersLiked = (
  payload: Pick<IGetBeersLikedPaylosd, 'query' | 'filter' | 'sortBy'>,
) => {
  const result = useQuery(['beersLiked', payload], () =>
    getBeersLiked({
      ...payload,
      cursor: 0,
      limit: 20,
    }),
  );

  return {
    ...result,
    contents: result.data,
  };
};
