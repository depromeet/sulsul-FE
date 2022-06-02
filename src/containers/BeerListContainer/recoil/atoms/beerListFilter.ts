import { atom } from 'recoil';
import Router from 'next/router';

import { IBeerListFilter } from '@/apis';
import QueryParams from '@/utils/query-params';

export const $beerListFilter = atom<IBeerListFilter>({
  key: 'beer-list-filter',
  default: {},
  effects: [
    ({ setSelf, trigger, onSet }) => {
      if (typeof window === 'undefined') {
        return;
      }
      if (trigger === 'get') {
        /** url 파라미터 값으로 필터 초기값 설정 */
        const filter = QueryParams.get('filter');
        filter && setSelf(JSON.parse(filter));
      }

      onSet((newValue) => {
        if (newValue) {
          /** @todo undefined값 제거 */
          QueryParams.set('filter', JSON.stringify(newValue), Router.replace);
        }
      });
    },
  ],
});
