import axios from 'axios';

import { IBaseResponse, IBeer } from '.';

export interface IToggleLikeBeerResponseData extends IBaseResponse<boolean> {}

/**
 * 맥주 찜하기 / 취소
 */
export const toggleLikeBeer = async (beerId: IBeer['id'], isLiked: boolean) => {
  const res = isLiked
    ? await axios.delete<IToggleLikeBeerResponseData>(`/api/v1/beer/liked/${beerId}`)
    : await axios.post<IToggleLikeBeerResponseData>(`/api/v1/beer/liked/${beerId}`);
  return res.data.contents;
};
