import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';
import { urlSyncRecoilEffect } from '@/recoil/effects';

export const BEER_LIST_FILTER_ATOM_KEY = 'beer-list-filter';

export const $beerListFilter = atom<IBeerListFilter>({
  key: BEER_LIST_FILTER_ATOM_KEY,
  default: {},
  effects: [urlSyncRecoilEffect(BEER_LIST_FILTER_ATOM_KEY)],
});
