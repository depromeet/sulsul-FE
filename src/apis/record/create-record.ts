import { IRecord } from './record';
import { IBaseResponse } from '..';

import axios from '@/configs/axios';

export type ICreateRecordResponseData = IBaseResponse<IRecord>;

export interface ICreateRecordPayload {
  beerId: number;
  content: string;
  feel: number;
  imageUrl: string;
  isPublic: boolean;
}

export const createRecord = async (payload: ICreateRecordPayload) => {
  const res = await axios.post<ICreateRecordResponseData>('/api/v1/records', payload);
  console.log(res);
  return res.data.contents;
};
