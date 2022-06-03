import { AtomEffect } from 'recoil';

import QueryParams from '@/utils/query-params';

const queryParamsRecoilEffect =
  (queryParamKey: string): AtomEffect<any> =>
  ({ setSelf, trigger, onSet, resetSelf }) => {
    if (trigger === 'get') {
      const queryValue = QueryParams.get(queryParamKey);
      queryValue ? setSelf(queryValue) : resetSelf();
    }

    onSet((newValue) => {
      if (newValue) {
        QueryParams.set(queryParamKey, newValue);
      }
    });
  };

export default queryParamsRecoilEffect;
