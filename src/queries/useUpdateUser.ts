import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';

import { IProfile, updateUser } from '@/apis';
import $userSession from '@/recoil/atoms/userSession';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const [userSession, setUserSession] = useRecoilState($userSession);

  return useMutation(updateUser, {
    onSuccess: (nickname) => {
      /** 프로필 캐시 업데이트 */
      queryClient.setQueryData<IProfile>(
        ['profile'],
        (data) =>
          ({
            ...(data ? data : {}),
            nickname,
          } as IProfile),
      );
      userSession && setUserSession({ ...userSession, nickname });
    },
  });
};
