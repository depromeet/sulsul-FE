import axios from 'axios';

import { IBaseResponse } from '..';

interface IDeleteUserResponse extends IBaseResponse<null> {}

export const deleteUser = async () => {
  const res = await axios.delete<IDeleteUserResponse>('/api/v1/members');
  return res.data;
};
