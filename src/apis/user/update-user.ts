import { IBaseResponse } from '..';

import axios from '@/configs/axios';

export interface IUpdateUserResponse extends IBaseResponse<string> {}

export interface IUpdateUserPayload {
  nickname: string;
}

export const updateUser = async (payload: IUpdateUserPayload) => {
  const res = await axios.put<IUpdateUserResponse>('/api/v1/profile', payload);
  return res.data.contents;
};
