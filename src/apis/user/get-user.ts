import axios from 'axios';
import { setCookies } from 'cookies-next';
import { NextPageContext } from 'next';

import { IBaseResponse } from '..';
import { IUser } from './user';
import { refreshAccessToken } from './refresh-access-token';

interface IGetUserResponse extends IBaseResponse<IUser> {}

/**
 * 국가 목록 조회
 */
export const getUser = async (ctx?: NextPageContext) => {
  try {
    const res = await axios.get<IGetUserResponse>('/api/v1/members');
    return res.data.contents;
  } catch (error) {
    if (!ctx) {
      return undefined;
    }

    const res = await refreshAccessToken();

    if (!res?.contents) {
      return;
    }

    const { accessToken, refreshToken } = res.contents;

    setCookies('accessToken', accessToken, ctx);
    setCookies('refreshToken', refreshToken, ctx);
    axios.defaults.headers.common['Cookie'] = `accessToken=${accessToken}`;

    try {
      const res = await axios.get<IGetUserResponse>('/api/v1/members');
      return res.data.contents;
    } catch (error) {
      return undefined;
    }
  }
};
