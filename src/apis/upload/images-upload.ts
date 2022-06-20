import axios from 'axios';

import { IBaseResponse } from '..';

export type IImagesUploadResponseData = IBaseResponse<Array<{ imageUrl: string }>>;

export const uploadImages = async (payload: FormData) => {
  const res = await axios.post<IImagesUploadResponseData>('/api/v1/request-beers/images', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data.contents;
};
