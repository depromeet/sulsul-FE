import axios from 'axios';

import { IRecord } from './record';
import { IBaseResponse } from '..';

export type ICreateRecordResponseData = IBaseResponse<IRecord>;

export interface ICreateRecordPayload {
  beerId: number;
  content: string;
  feel: number;
  imageUrl: string;
  isPublic: boolean;
  flavorIds: number[];
}

export const createRecord = async (payload: ICreateRecordPayload) => {
  const res = await axios.post<ICreateRecordResponseData>('/api/v1/records', payload);
  return res.data.contents;
};
