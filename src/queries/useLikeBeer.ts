import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';

import { likeBeer, IBeer } from '@/apis';
import $beerSession from '@/recoil/atoms/beerSession';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useLikeBeer = () => {
  const queryClient = useQueryClient();
  const [beerSession, setBeerSession] = useRecoilState($beerSession);

  return useMutation((id: IBeer['id']) => likeBeer(id), {
    onSuccess: (isLiked) => {
      queryClient.setQueryData<IBeer>(
        ['beerId'],
        (data) => ({ ...(data ? data : {}), isLiked } as IBeer),
      );
      beerSession && setBeerSession({ ...beerSession, isLiked });
      openSuccessToast({ message: '맥주를 반한 목록에 추가했어요.' });
    },
    onError: () => {
      openFailToast({
        message: '맥주를 반한 목록 추가에 실패했어요. 잠시 후 다시 시도해주세요.',
      });
    },
  });
};
