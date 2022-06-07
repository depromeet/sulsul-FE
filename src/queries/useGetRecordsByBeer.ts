import { useQuery } from 'react-query';

import { getRecordsByBeer, IGetRecordsByBeerPayload } from '@/apis';

export const useGetRecordsByBeer = (payload: IGetRecordsByBeerPayload) => {
  const result = useQuery(
    ['recordsByBeer', payload.beerId],
    async () => await getRecordsByBeer(payload),
    {
      cacheTime: Infinity,
    },
  );

  return {
    ...result,
    recordsByBeer: result.data?.contents,
  };
};
