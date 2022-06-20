import { useMutation, useQueryClient } from 'react-query';

import { deleteRecord, IRecord } from '@/apis';
import { openFailToast } from '@/utils/toast';

export const useDeleteRecord = (recordId: IRecord['id']) => {
  const queryClient = useQueryClient();

  return useMutation(deleteRecord, {
    onSuccess: () => {
      queryClient.resetQueries(['record', recordId]);
    },
    onError: async () => {
      openFailToast({ message: '기록 삭제에 실패했어요. 잠시 후 다시 시도해주세요.' });
      console.log('에러');
    },
  });
};
