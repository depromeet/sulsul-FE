import axios from 'axios';

import { IBaseResponse } from '..';

export interface IImageUploadResponseData extends IBaseResponse<{ imageUrl: string }> {}

export const uploadImage = async (payload: FormData) => {
  const res = await axios.post<IImageUploadResponseData>('/api/v1/records/images', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
