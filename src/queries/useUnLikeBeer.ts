import { useMutation } from 'react-query';

import { unLikeBeer, IBeer } from '@/apis';

export const useUnLikeBeer = () => {
  return useMutation((beerId: IBeer['id']) => unLikeBeer(beerId));
};
