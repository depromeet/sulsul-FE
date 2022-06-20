import { useMutation, useQueryClient } from 'react-query';

import { deleteRecord, IRecord } from '@/apis';

export const useDeleteRecord = (recordId: IRecord['id']) => {
  const queryClient = useQueryClient();

  return useMutation(deleteRecord, {
    onSuccess: () => {
      queryClient.resetQueries(['record', recordId]);
    },
    onError: () => {
      alert('맥주 기록 삭제에 실패했어요.');
    },
  });
};
