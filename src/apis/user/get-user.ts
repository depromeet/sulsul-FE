import axios from 'axios';

import { IBaseResponse } from '..';
import { IUser } from './user';

interface IGetUserResponse extends IBaseResponse<IUser> {}

/**
 * 국가 목록 조회
 */
export const getUser = async () => {
  try {
    const res = await axios.get<IGetUserResponse>('/api/v1/members');
    return res.data.contents;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
