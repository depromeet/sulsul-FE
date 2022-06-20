import { useQuery } from 'react-query';

import { getRequestBeers } from '@/apis';

export const useGetRequestBeers = () => {
  /** @todo 무한스크롤 구현 */
  const result = useQuery('request-beers', () => getRequestBeers({ cursor: 5, limit: 100 }));

  return {
    ...result,
    contents: result.data?.contents,
    resultCount: result.data?.resultCount,
  };
};
