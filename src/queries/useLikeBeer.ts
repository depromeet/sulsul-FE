import { useMutation, useQueryClient } from 'react-query';

import { toggleLikeBeer, IBeer } from '@/apis';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useLikeBeer = (beerId: IBeer['id'], isLiked: boolean) => {
  const queryClient = useQueryClient();

  return useMutation((id: IBeer['id']) => toggleLikeBeer(id, isLiked), {
    onMutate: () => {
      queryClient.cancelQueries(['beer', beerId]);
      const previousBeer = queryClient.getQueryData<IBeer>(['beer', beerId]);
      if (previousBeer) {
        queryClient.setQueryData<IBeer>(
          ['beer', beerId],
          (oldBeerData) => ({ ...oldBeerData, isLiked: !oldBeerData?.isLiked } as IBeer),
        );
      }
      return { previousBeer };
    },
    onSuccess: () => {
      openSuccessToast({ message: '맥주를 반한 목록에 추가했어요.' });
    },
    onError: (context?: { previousBeer: IBeer | undefined }) => {
      if (context?.previousBeer) {
        queryClient.setQueryData<IBeer>(['beer', beerId], context.previousBeer);
      }
      openFailToast({
        message: '맥주를 반한 목록 추가에 실패했어요. 잠시 후 다시 시도해주세요.',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['beer', beerId]);
    },
  });
};
