import { useQuery } from 'react-query';

import { getRecord, IRecord } from '@/apis';

export const useGetRecord = (recordId: IRecord['id'], initialData?: IRecord) => {
  const result = useQuery(['record', recordId], () => getRecord(recordId), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
