import { atom } from 'recoil';

import { persistRecoilEffect } from '@/recoil/effects';

const ATOM_KEY = 'search-histories';

const $searchHistories = atom<string[]>({
  key: ATOM_KEY,
  default: [],
  effects: [persistRecoilEffect({ recoilAtomKey: ATOM_KEY })],
});

export default $searchHistories;
