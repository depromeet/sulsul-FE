import { useRecoilValue } from 'recoil';

import { getBeers, IGetBeersResponseData, IGetBeersPayload } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';
import { $userSession } from '@/recoil/atoms';

const DEFAULT_LIMIT = 21;

export const useGetBeers = (
  { query, filter, sortBy }: Omit<IGetBeersPayload, 'cursor' | 'limit'>,
  initialData?: IGetBeersResponseData,
) => {
  const userSession = useRecoilValue($userSession);

  const payload = {
    ...(query ? { query } : {}),
    ...(filter ? { filter } : {}),
    ...(sortBy ? { sortBy } : {}),
  };

  const initialPageParam: { payload: IGetBeersPayload; auth: boolean } = {
    payload: {
      ...payload,
      cursor: 0,
      limit: DEFAULT_LIMIT,
    },
    auth: Boolean(userSession),
  };

  return useInfiniteScrollList<IGetBeersResponseData, { payload: IGetBeersPayload; auth: boolean }>(
    ['beers', payload],
    getBeers,
    {
      cacheTime: Infinity,
      initialData,
      initialPageParam,
      getNextPageParam: (lastPage) =>
        lastPage?.nextCursor
          ? {
              ...initialPageParam,
              payload: {
                ...initialPageParam.payload,
                cursor: lastPage.nextCursor,
              },
            }
          : undefined,
    },
  );
};
