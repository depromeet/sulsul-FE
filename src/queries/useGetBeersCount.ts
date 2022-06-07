import { useQuery } from 'react-query';

import { getBeersCount } from '@/apis';

export const useGetBeersCount = () => {
  /** @todo recoil value 사용 */
  const user = undefined;

  return useQuery('beersCount', () => getBeersCount(!!user));
};
