import { useQuery } from 'react-query';

import { getMyRecords, IGetMyRecordsResponseData, IRecord } from '@/apis';

export const useGetMyRecords = (
  cursorId?: IRecord['id'],
  initialData?: IGetMyRecordsResponseData,
) => {
  const result = useQuery('myRecords', () => getMyRecords(cursorId), {
    cacheTime: Infinity,
    initialData,
  });

  return {
    ...result,
    contents: result.data,
  };
};
