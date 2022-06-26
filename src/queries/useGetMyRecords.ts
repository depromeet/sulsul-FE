import { useRecoilValue } from 'recoil';

import { getMyRecords, IGetMyRecordsResponseData } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';
import { $userSession } from '@/recoil/atoms';

export const useGetMyRecords = (initialData?: IGetMyRecordsResponseData) => {
  const user = useRecoilValue($userSession);

  return useInfiniteScrollList<IGetMyRecordsResponseData, number>('myRecords', getMyRecords, {
    cacheTime: Infinity,
    initialData,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor || undefined;
    },
    enabled: !!user,
  });
};
