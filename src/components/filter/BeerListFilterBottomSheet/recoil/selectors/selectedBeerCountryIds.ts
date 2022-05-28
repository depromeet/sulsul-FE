import { DefaultValue, selector } from 'recoil';

import { $nextBeerListFilter } from '../atoms';

const SELECTOR_KEY = 'selected-country-ids';

export const $selectedBeerCountryIds = selector<number[]>({
  key: SELECTOR_KEY,
  get: ({ get }) => get($nextBeerListFilter).countryIds || [],
  set: ({ set, get }, newValue) =>
    set(
      $nextBeerListFilter,
      newValue instanceof DefaultValue
        ? newValue
        : { ...get($nextBeerListFilter), countryIds: newValue },
    ),
});
