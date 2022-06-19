import { useMutation, useQueryClient } from 'react-query';

import { IProfile, updateUser } from '@/apis';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: (data) => {
      /** @todo 프로필 캐시 업데이트 */
      //   queryClient.setQueryData<IProfile>(['profile'], (data) => ({
      //     ...(data ? data : {}),
      //     nickname: data?.nickname,
      //   }));
    },
  });
};
