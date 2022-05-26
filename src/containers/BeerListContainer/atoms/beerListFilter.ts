import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';

const ATOM_KEY = 'beer-list-filter';

export const $beerListFilter = atom<IBeerListFilter>({
  key: ATOM_KEY,
  default: {},
});
