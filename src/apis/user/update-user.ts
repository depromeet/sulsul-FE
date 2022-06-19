import axios from 'axios';

import { IBaseResponse } from '..';

export interface IUpdateUserResponse extends IBaseResponse<null> {}

export interface IUpdateUserPayload {
  name: string;
}

export const updateUser = async (payload: IUpdateUserPayload) => {
  const res = await axios.put<IUpdateUserResponse>('/api/v1/profile', payload);
  return res.data;
};
