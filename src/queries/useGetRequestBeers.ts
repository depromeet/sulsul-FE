import { useQuery } from 'react-query';

import { getRequestBeers, IGetRequestBeersResponse } from '@/apis';

export const useGetRequestBeers = (initialData?: IGetRequestBeersResponse) => {
  /** @todo 무한스크롤 구현 */
  const result = useQuery('request-beers', () => getRequestBeers({ cursor: 0, limit: 20 }), {
    initialData,
  });

  return {
    ...result,
    contents: result.data?.contents,
    resultCount: result.data?.resultCount,
  };
};
