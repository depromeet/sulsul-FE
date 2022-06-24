import { getRequestBeers, IGetRequestBeersPayload, IGetRequestBeersResponse } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';

const DEFAULT_LIMIT = 21;

export const useGetRequestBeers = (initialData?: IGetRequestBeersResponse) => {
  const initialPageParam: IGetRequestBeersPayload = { cursor: 0, limit: DEFAULT_LIMIT };

  return useInfiniteScrollList<IGetRequestBeersResponse, IGetRequestBeersPayload>(
    'request-beers',
    getRequestBeers,
    {
      initialData,
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
