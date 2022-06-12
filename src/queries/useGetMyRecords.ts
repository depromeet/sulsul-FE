import { useInfiniteQuery } from 'react-query';

import { getMyRecords, IGetMyRecordsResponseData } from '@/apis';

export const useGetMyRecords = (initialData?: IGetMyRecordsResponseData) => {
  const result = useInfiniteQuery('myRecords', getMyRecords, {
    cacheTime: Infinity,
    initialData: initialData ? { pages: [initialData], pageParams: [undefined] } : undefined,
    getNextPageParam(lastPage) {
      return lastPage.nextCursor || undefined;
    },
  });

  return {
    ...result,
    contents: result.data,
  };
};
