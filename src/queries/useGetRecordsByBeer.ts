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
  { beerId, recordId }: IGetRecordsByBeerPayload,
  initialData?: IGetRecordsByBeer,
) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const auth = undefined;

  const payload = { beerId, recordId };

  const result = useInfiniteQuery(['recordsByBeer', beerId], getRecordsByBeer, {
    cacheTime: Infinity,
    initialData: initialData
      ? { pages: [initialData], pageParams: [{ payload, auth }] }
      : undefined,
    getNextPageParam(lastPage) {
      return lastPage.nextCursor || undefined;
    },
  });

  const { data } = result;

  const { contents, pageInfo } = useMemo(
    () =>
      data?.pages.reduce<BasePagenationQueryHooksResponse<IRecordsByBeer>>(
        (responseAcc, response) => ({
          contents: [...(responseAcc.contents || []), ...(response.contents || [])],
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
