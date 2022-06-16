import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { BasePagenationQueryHooksResponse } from '.';

import {
  getRecordsByBeer,
  IGetRecordsByBeerPayload,
  IRecordsByBeer,
  IGetRecordsByBeer,
} from '@/apis';

export const useGetRecordsByBeer = (
  payload: IGetRecordsByBeerPayload,
  initialData?: IGetRecordsByBeer,
) => {
  const result = useInfiniteQuery(
    ['recordsByBeer', payload.beerId],
    async () => await getRecordsByBeer(payload),
    {
      cacheTime: Infinity,
      initialData: initialData ? { pages: [initialData], pageParams: [undefined] } : undefined,
      getNextPageParam(lastPage) {
        return lastPage.nextCursor || undefined;
      },
    },
  );

  const { data } = result;

  const { contents, pageInfo } = useMemo(
    () =>
      data?.pages.reduce<BasePagenationQueryHooksResponse<IRecordsByBeer>>(
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
