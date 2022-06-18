import { useQuery } from 'react-query';

import { getLevels, ILevel } from '@/apis';

export const useGetLevels = (initialData?: ILevel[]) => {
  const result = useQuery(['levels'], () => getLevels(), {
    cacheTime: Infinity,
    initialData: initialData ? initialData : undefined,
  });

  return {
    ...result,
    contents: result.data,
  };
};
