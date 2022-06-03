import { AtomEffect } from 'recoil';

import QueryParams from '@/utils/query-params';

const queryParamsRecoilEffect =
  (queryParamKey: string): AtomEffect<any> =>
  ({ onSet }) => {
    onSet((newValue) => {
      if (newValue) {
        QueryParams.set(queryParamKey, newValue);
      }
    });
  };

export default queryParamsRecoilEffect;
