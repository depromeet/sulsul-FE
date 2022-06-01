import { selector } from 'recoil';

import { getCountries, ICountry } from '@/apis';

const SELECTOR_KEY = 'countries';

export const $countries = selector<ICountry[]>({
  key: SELECTOR_KEY,
  get: async () => {
    const res = await getCountries();
    return res?.contents;
  },
});
