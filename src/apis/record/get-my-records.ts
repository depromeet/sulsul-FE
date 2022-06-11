import { IRecord } from './record';
import { IBasePageNationResponse } from '..';

import axios from '@/configs/axios';

export interface IGetMyRecordsResponseData extends IBasePageNationResponse<IRecord[]> {}

export const getMyRecords = async (cursorId?: number) => {
  const res = await axios.get<IGetMyRecordsResponseData>(
    `/api/v1/records/ticket/${cursorId || ''}`,
  );
  return res.data;
};
