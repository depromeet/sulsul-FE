import { useQuery } from 'react-query';

import { getProfile, IProfile } from '@/apis';

export const useGetProfile = (initialData?: IProfile) => {
  const result = useQuery(['profile'], () => getProfile(), {
    cacheTime: 5 * 60 * 1000, // 5 minutes
    initialData: initialData ? initialData : undefined,
  });

  return {
    ...result,
    contents: result.data,
  };
};
