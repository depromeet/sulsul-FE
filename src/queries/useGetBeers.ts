import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { BasePagenationQueryHooksResponse } from '.';

import { getBeers, IGetBeersResponseData, IGetBeersPayload, IBeer } from '@/apis';

export const useGetBeers = (
  { query, filter, sortBy, limit }: Pick<IGetBeersPayload, 'query' | 'filter' | 'sortBy' | 'limit'>,
  initialData?: IGetBeersResponseData,
) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const auth = undefined;

  const payload = {
    query,
    filter,
    sortBy,
    limit,
  };

  const result = useInfiniteQuery(['beers', payload], getBeers, {
    cacheTime: Infinity,
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [{ payload, auth }],
        }
      : undefined,
    getNextPageParam(lastPage) {
      return lastPage.nextCursor || undefined;
    },
  });

  const { data } = result;

  const { contents, resultCount, pageInfo } = useMemo(
    () =>
      data?.pages.reduce<BasePagenationQueryHooksResponse<IBeer>>(
        (responseAcc, response) => ({
          contents: [...(responseAcc.contents || []), ...(response.contents || [])],
          resultCount: response.resultCount,
          pageInfo: {
            hasNext: response.hasNext,
            nextCursor: response.nextCursor,
          },
        }),
        { contents: [], resultCount: 0, pageInfo: {} },
      ) || { contents: [], resultCount: 0, pageInfo: {} },
    [data?.pages],
  );

  return {
    ...result,
    contents,
    resultCount,
    pageInfo,
  };
};
