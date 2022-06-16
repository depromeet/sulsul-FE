import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { BasePagenationQueryHooksResponse } from '.';

import { getBeers, IGetBeersPayload, IBeer } from '@/apis';

export const useGetBeers = ({
  query,
  filter,
  sortBy,
}: Pick<IGetBeersPayload, 'query' | 'filter' | 'sortBy'>) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const user = undefined;

  const payload = {
    query,
    filter,
    sortBy,
  };

  const result = useInfiniteQuery(
    ['beers', payload],
    () =>
      getBeers(
        {
          ...payload,
          cursor: 0,
          limit: 20,
        },
        !!user,
      ),
    {
      cacheTime: Infinity,
      //enabled: pageInfo.hasNext,
      getNextPageParam(lastPage) {
        return lastPage.nextCursor || undefined;
      },
    },
  );

  const { data } = result;

  const { contents, pageInfo } = useMemo(
    () =>
      data?.pages.reduce<BasePagenationQueryHooksResponse<IBeer>>(
        (responseAcc, response) => ({
          contents: [...responseAcc.contents, ...response.contents],
          pageInfo: {
            hasNext: response.hasNext,
            nextCursor: response.nextCursor,
          },
        }),
        { contents: [], pageInfo: {} },
      ) || { contents: [], pageInfo: {} },
    [data?.pages],
  );

  return {
    ...result,
    contents,
    pageInfo,
  };
};
