import axios from 'axios';

import { IFlavor } from './flavor';
import { IBaseResponse } from '..';

export type IGetFlavorsResponseData = IBaseResponse<IFlavor[]>;

export const getFlavors = async () => {
  const res = await axios.get<IGetFlavorsResponseData>(`/api/v1/flavors`);
  return res.data.contents;
};
