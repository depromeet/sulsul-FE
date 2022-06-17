import { useMutation, useQueryClient } from 'react-query';

import { deleteUser } from '@/apis';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
