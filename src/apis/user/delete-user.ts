import { IBaseResponse } from '..';

import axios from '@/configs/axios';

interface IDeleteUserResponse extends IBaseResponse<null> {}

export const deleteUser = async () => {
  const res = await axios.delete<IDeleteUserResponse>('/api/v1/members');
  return res.data;
};
