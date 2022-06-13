import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { BasePagenationQueryHooksResponse } from '.';

import { getMyRecords, IGetMyRecordsResponseData, IRecord } from '@/apis';

export const useGetMyRecords = (initialData?: IGetMyRecordsResponseData) => {
  const result = useInfiniteQuery('myRecords', getMyRecords, {
    cacheTime: Infinity,
    initialData: initialData ? { pages: [initialData], pageParams: [undefined] } : undefined,
    getNextPageParam(lastPage) {
      return lastPage.nextCursor || undefined;
    },
  });

  const { data } = result;

  const { contents, pageInfo } = useMemo(
    () =>
      data?.pages.reduce<BasePagenationQueryHooksResponse<IRecord>>(
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
