import axios from 'axios';

import { IBaseResponse } from '..';

export interface IUpdateUserResponse extends IBaseResponse<string> {}

export interface IUpdateUserPayload {
  nickname: string;
}

export const updateUser = async (payload: IUpdateUserPayload) => {
  const res = await axios.put<IUpdateUserResponse>('/api/v1/profile', payload);
  return res.data.contents;
};
