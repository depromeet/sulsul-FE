import { useQuery } from 'react-query';

import { getUserLevel, ILevel } from '@/apis';

export const useGetUserLevel = (initialData?: ILevel) => {
  const result = useQuery(['level'], () => getUserLevel(), {
    cacheTime: Infinity,
    initialData: initialData ? initialData : undefined,
  });

  return {
    ...result,
    contents: result.data,
  };
};
