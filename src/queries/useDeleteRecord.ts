import { useMutation, useQueryClient } from 'react-query';

import { deleteRecord } from '@/apis';

export const useDeleteRecord = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteRecord, {
    onSuccess: () => {
      queryClient.resetQueries('record');
    },
  });
};
