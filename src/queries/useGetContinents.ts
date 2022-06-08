import { useQuery } from 'react-query';

import { getContinents } from '@/apis';

export const useGetContinents = () => {
  /** @todo recoil value 사용 */
  const user = undefined;

  return useQuery('continents', () => getContinents(!!user), { cacheTime: Infinity });
};
