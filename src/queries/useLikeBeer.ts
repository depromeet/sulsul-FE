import { useMutation } from 'react-query';

import { likeBeer, IBeer } from '@/apis';

export const useLikeBeer = () => {
  return useMutation((beerId: IBeer['id']) => likeBeer(beerId));
};
