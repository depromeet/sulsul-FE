import { useRecoilValue } from 'recoil';

import { getRecordsByBeer, IGetRecordsByBeerPayload, IGetRecordsByBeer } from '@/apis';
import { useInfiniteScrollList } from '@/hooks';
import { $userSession } from '@/recoil/atoms';

export const useGetRecordsByBeer = (
  { beerId, recordId }: IGetRecordsByBeerPayload,
  initialData?: IGetRecordsByBeer,
) => {
  const userSession = useRecoilValue($userSession);

  const initialPageParam = { payload: { beerId, recordId }, auth: Boolean(userSession) };

  return useInfiniteScrollList<
    IGetRecordsByBeer,
    {
      payload: IGetRecordsByBeerPayload;
      auth: boolean;
    }
  >(['recordsByBeer', beerId], getRecordsByBeer, {
    cacheTime: Infinity,
    initialData,
    initialPageParam,
    getNextPageParam: (lastPage) => {
      return lastPage
        ? {
            ...initialPageParam,
            payload: { ...initialPageParam.payload, recordId: lastPage.nextCursor },
          }
        : undefined;
    },
  });
};
