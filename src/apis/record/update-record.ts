import axios from 'axios';

import { IRecord } from './record';
import { IBaseResponse } from '..';

export type ICreateRecordResponseData = IBaseResponse<IRecord>;

export interface IUpdateRecordPayload {
  content: string;
  feel: number;
  imageUrl: string;
  isPublic: boolean;
  flavorIds: number[];
  recordId: number;
}

export const updateRecord = async (payload: IUpdateRecordPayload) => {
  const res = await axios.patch<ICreateRecordResponseData>('/api/v1/records', payload);
  return res.data.contents;
};
