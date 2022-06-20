import { useQuery } from 'react-query';

import { getFlavors, IFlavor } from '@/apis';

export const useGetFlavors = (initialData?: IFlavor[]) => {
  const result = useQuery('flavors', () => getFlavors(), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
