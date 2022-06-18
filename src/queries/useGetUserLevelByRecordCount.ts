import { useQuery } from 'react-query';

import { getUserLevelByRecordCount, ILevel } from '@/apis';

export const useGetUserLevelByRecordCount = (count: number, initialData?: ILevel) => {
  const result = useQuery(['level', count], () => getUserLevelByRecordCount(count), {
    cacheTime: Infinity,
    initialData: initialData ? initialData : undefined,
  });

  return {
    ...result,
    contents: result.data,
  };
};
