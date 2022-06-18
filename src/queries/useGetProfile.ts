import { useQuery } from 'react-query';

import { getProfile, IProfile } from '@/apis';

export const useGetProfile = (initialData?: IProfile) => {
  const result = useQuery(['profile'], () => getProfile(), {
    cacheTime: Infinity,
    initialData: initialData ? initialData : undefined,
  });

  return {
    ...result,
    contents: result.data,
  };
};
