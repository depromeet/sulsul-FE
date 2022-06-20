import { IBaseResponse, IBeer } from '.';

import axios from '@/configs/axios';

export interface ILikeBeerResponseData extends IBaseResponse<boolean> {}

/**
 * 맥주 찜하기
 */
export const likeBeer = async (beerId: IBeer['id']) => {
  const res = await axios.post<ILikeBeerResponseData>(`/api/v1/beer/liked/${beerId}`);
  return res.data.contents;
};

export interface IUnLikeBeerResponseData extends IBaseResponse<boolean> {}

/**
 * 맥주 찜하기 취소
 */
export const unLikeBeer = async (beerId: number) => {
  const res = await axios.delete<IUnLikeBeerResponseData>(`/api/v1/beer/liked/${beerId}`);
  return res.data.contents;
};
