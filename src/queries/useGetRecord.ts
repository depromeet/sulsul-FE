import { useQuery, UseQueryOptions } from 'react-query';

import { getRecord, IRecord } from '@/apis';

export const useGetRecord = (
  recordId: IRecord['id'],
  options?: Omit<
    UseQueryOptions<unknown, unknown, IRecord, (string | number)[]>,
    'queryKey' | 'queryFn'
  >,
) => {
  const result = useQuery(['record', recordId], () => getRecord(recordId), {
    cacheTime: Infinity,
    ...options,
  });

  return {
    ...result,
    contents: result.data,
  };
};
