import { useInfiniteQuery } from 'react-query';

import { getBeers, IGetBeersResponseData, IGetBeersPayload } from '@/apis';

const DEFAULT_LIMIT = 21;

export const useGetBeers = (
  { query, filter, sortBy }: Omit<IGetBeersPayload, 'cursor' | 'limit'>,
  initialData?: IGetBeersResponseData,
) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const auth = undefined;

  const queryKey = ['beers', { query, filter, sortBy }];
  const initialPageParam: { payload: IGetBeersPayload; auth: boolean } = {
    payload: {
      ...{ query, filter, sortBy },
      cursor: 0,
      limit: DEFAULT_LIMIT,
    },
    auth: !!auth,
  };

  const result = useInfiniteQuery<
    IGetBeersResponseData,
    { payload: IGetBeersPayload; auth: boolean }
  >(queryKey, ({ pageParam }) => getBeers(pageParam ?? initialPageParam), {
    cacheTime: Infinity,
    ...(initialData
      ? {
          initialData: {
            pages: initialData ? [initialData] : [],
            pageParams: [initialPageParam],
          },
        }
      : {}),
    getNextPageParam: (lastPage) =>
      lastPage
        ? {
            ...initialPageParam,
            payload: {
              ...initialPageParam.payload,
              ...(lastPage ? { cursor: lastPage.nextCursor } : {}),
            },
          }
        : undefined,
  });

  const { data } = result;

  const contents = data
    ? data.pages
        .map((page) => page.contents)
        .reduce(
          (mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])],
          [],
        )
    : undefined;

  const lastPage = data ? data.pages[data.pages.length - 1] : undefined;
  const resultCount = lastPage?.resultCount;
  const hasNext = lastPage?.hasNext;

  return {
    ...result,
    contents,
    resultCount,
    hasNext,
  };
};
