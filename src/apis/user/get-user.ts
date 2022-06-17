import { IBaseResponse } from '..';
import { IUser } from './user';

import axios from '@/configs/axios';

interface IGetUserResponse extends IBaseResponse<IUser> {}

/**
 * 국가 목록 조회
 */
export const getUser = async () => {
  const res = await axios.get<IGetUserResponse>('/api/v1/members');
  return res.data.contents;
};
