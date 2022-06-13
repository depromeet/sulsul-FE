import { useQuery } from 'react-query';

import { getBeers, IGetBeersPayload } from '@/apis';

export const useGetBeers = ({
  query,
  filter,
  sortBy,
}: Pick<IGetBeersPayload, 'query' | 'filter' | 'sortBy'>) => {
  /** @todo const user = useRecoilValue($userInfo); */
  const user = undefined;

  const payload = {
    query,
    filter,
    sortBy,
  };

  return useQuery(['beers', payload], () =>
    getBeers(
      {
        ...payload,
        cursor: 0,
        limit: 20,
      },
      !!user,
    ),
  );
};
