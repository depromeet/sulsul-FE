import axios from 'axios';

import { IBaseResponse } from '..';

interface IRefreshAccessTokenResponse
  extends IBaseResponse<{
    accessToken: string;
    refreshToken: string;
  }> {}

/**
 * refreshToken으로 accessToken 갱신
 */
export const refreshAccessToken = async () => {
  try {
    const res = await axios.get<IRefreshAccessTokenResponse>('/api/v1/token/refresh');
    return res.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
