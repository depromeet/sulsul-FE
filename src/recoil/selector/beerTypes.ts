import { selector } from 'recoil';

import { getBeerTypes, IBeerType } from '@/apis';

const SELECTOR_KEY = 'beer-types';

export const $beerTypes = selector<IBeerType[]>({
  key: SELECTOR_KEY,
  get: async () => {
    const res = await getBeerTypes();
    return res?.contents;
  },
});
