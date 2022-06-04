import { IBaseResponse } from '..';

import axios from '@/configs/axios';

export type IImageUploadResponseData = IBaseResponse<{ imageUrl: string }>;

export const uploadImage = async (payload: FormData) => {
  const res = await axios.post<IImageUploadResponseData>('/api/v1/records/images', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
