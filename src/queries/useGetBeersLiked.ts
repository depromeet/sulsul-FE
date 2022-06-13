import { useQuery } from 'react-query';

import { getBeersLiked, IGetBeersLikedPayload } from '@/apis';

export const useGetBeersLiked = (
  payload: Pick<IGetBeersLikedPayload, 'query' | 'filter' | 'sortBy'>,
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
