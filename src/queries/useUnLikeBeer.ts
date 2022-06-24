import { useMutation, useQueryClient } from 'react-query';

import { toggleLikeBeer, IBeer } from '@/apis';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useUnLikeBeer = (beerId: IBeer['id'], isLiked: boolean) => {
  const queryClient = useQueryClient();

  return useMutation((beerId: IBeer['id']) => toggleLikeBeer(beerId, isLiked), {
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
    onSuccess: (isLiked) => {
      openSuccessToast({ message: '맥주를 반한 목록에서 삭제했어요.' });
      /** 맥주 목록 캐시 업데이트 */
      queryClient.setQueryData<IBeer[]>(
        ['beers'],
        (data) =>
          ({
            ...(data ? data : {}),
            isLiked,
          } as IBeer[]),
      );
      /** 찜 목록 캐시 업데이트 */
      queryClient.setQueryData<IBeer[]>(
        ['beersLiked'],
        (data) =>
          ({
            ...(data ? data : {}),
            isLiked,
          } as IBeer[]),
      );
    },
    onError: (context?: { previousBeer: IBeer | undefined }) => {
      if (context?.previousBeer) {
        queryClient.setQueryData<IBeer>(['beer', beerId], context.previousBeer);
      }
      openFailToast({
        message: '맥주를 반한 목록에서 삭제하지 못했어요. 잠시 후 다시 시도해주세요.',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['beer', beerId]);
    },
  });
};
