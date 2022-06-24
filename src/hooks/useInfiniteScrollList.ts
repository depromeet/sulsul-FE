import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from 'react-query';

import { IBasePaginationResponse } from '@/apis';

interface useInfiniteScrollListOptions<TPages = any, TPageParam = any>
  extends Omit<
    UseInfiniteQueryOptions<TPages, any, TPages, TPages, QueryKey>,
    'queryKey' | 'queryFn' | 'initialData' | 'getNextPageParam'
  > {
  initialData?: TPages;
  initialPageParam?: TPageParam;
  /** getNextPageParam이 undefined를 반환하는 경우 hasNextPage가 false */
  getNextPageParam: (lastPage: TPages) => TPageParam | undefined;
}

const useInfiniteScrollList = <TPage extends IBasePaginationResponse<any[]>, TPageParam = any>(
  queryKey: QueryKey,
  fetchPage: (pageParam: TPageParam) => Promise<TPage>,
  options: useInfiniteScrollListOptions<TPage, TPageParam>,
): UseInfiniteQueryResult<TPage, any> & {
  contents?: any[];
  resultCount?: number;
} => {
  const { initialData, initialPageParam, ...restOptions } = options || {};

  const result = useInfiniteQuery<TPage>(
    queryKey,
    ({ pageParam }) => fetchPage(pageParam ?? options?.initialPageParam),
    {
      ...restOptions,
      ...(initialData
        ? {
            initialData: {
              pages: initialData ? [initialData] : [],
              pageParams: [initialPageParam],
            },
          }
        : {}),
    },
  );

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

  return {
    ...result,
    contents,
    resultCount,
  };
};

export default useInfiniteScrollList;
