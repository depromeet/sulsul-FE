import { useQuery } from 'react-query';

import { getUser, IUser } from '@/apis';

export const useGetUser = (initialData?: IUser) => {
  const result = useQuery('user', () => getUser(), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
