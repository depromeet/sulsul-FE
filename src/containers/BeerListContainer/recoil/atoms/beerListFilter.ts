import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';
import { queryParamsRecoilEffect } from '@/recoil/effects';

export const $beerListFilter = atom<IBeerListFilter>({
  key: 'beer-list-filter',
  default: {},
  effects: [queryParamsRecoilEffect('filter')],
});
