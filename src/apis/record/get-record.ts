import { IRecord } from './record';
import { IBaseResponse } from '..';

import axios from '@/configs/axios';

export type IGetRecordResponseData = IBaseResponse<IRecord>;

export const getRecord = async (id: number) => {
  const res = await axios.get<IGetRecordResponseData>(`/api/v1/records/${id}`);
  return res.data.contents;
};
