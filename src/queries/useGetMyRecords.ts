import { getMyRecords, IGetMyRecordsResponseData } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';

export const useGetMyRecords = (initialData?: IGetMyRecordsResponseData) => {
  return useInfiniteScrollList<IGetMyRecordsResponseData, number>('myRecords', getMyRecords, {
    cacheTime: Infinity,
    initialData,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor || undefined;
    },
  });
};
