import { IBaseResponse } from '..';
import { IProfile } from '../profile';

import axios from '@/configs/axios';

export interface IUpdateUserResponse extends IBaseResponse<IProfile> {}

export interface IUpdateUserPayload {
  nickname: string;
}

export const updateUser = async (payload: IUpdateUserPayload) => {
  const res = await axios.put<IUpdateUserResponse>('/api/v1/profile', payload);
  return res.data.contents;
};
