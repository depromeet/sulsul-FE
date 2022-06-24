import { getBeersLiked, IGetBeersLikedPayload, IGetBeersLikedResponseData } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';

const DEFAULT_LIMIT = 21;

export const useGetBeersLiked = (
  payload: Pick<IGetBeersLikedPayload, 'query' | 'filter' | 'sortBy'>,
) => {
  const initialPageParam: IGetBeersLikedPayload = {
    ...payload,
    cursor: 0,
    limit: DEFAULT_LIMIT,
  };

  return useInfiniteScrollList<IGetBeersLikedResponseData, IGetBeersLikedPayload>(
    ['beersLiked', payload],
    getBeersLiked,
    {
      initialPageParam,
      getNextPageParam: (lastPage) =>
        lastPage?.nextCursor
          ? {
              ...initialPageParam,
              cursor: lastPage.nextCursor,
            }
          : undefined,
    },
  );
};
