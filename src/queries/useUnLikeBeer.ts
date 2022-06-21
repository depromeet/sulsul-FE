import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';

import { unLikeBeer, IBeer } from '@/apis';
import $beerSession from '@/recoil/atoms/beerSession';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useUnLikeBeer = () => {
  const queryClient = useQueryClient();
  const [beerSession, setBeerSession] = useRecoilState($beerSession);

  return useMutation((beerId: IBeer['id']) => unLikeBeer(beerId), {
    onSuccess: (isLiked) => {
      queryClient.setQueryData<IBeer>(
        ['beerId'],
        (data) => ({ ...(data ? data : {}), isLiked } as IBeer),
      );
      beerSession && setBeerSession({ ...beerSession, isLiked });
      openSuccessToast({ message: '맥주를 반한 목록에서 삭제했어요.' });
    },
    onError: () => {
      openFailToast({
        message: '맥주를 반한 목록에서 삭제하지 못했어요. 잠시 후 다시 시도해주세요.',
      });
    },
  });
};
