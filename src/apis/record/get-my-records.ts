import axios from 'axios';

import { IRecord } from './record';
import { IBasePaginationResponse } from '..';

export interface IGetMyRecordsResponseData extends IBasePaginationResponse<IRecord[]> {}

export const getMyRecords = async (pageParam?: number) => {
  const res = await axios.get<IGetMyRecordsResponseData>(
    `/api/v1/records/tickets/${pageParam || ''}`,
  );
  return res.data;
};
