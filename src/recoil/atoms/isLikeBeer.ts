import { atom } from 'recoil';

import { persistRecoilEffect } from '@/recoil/effects';

const ATOM_KEY = 'is-like-beer';

const $isLikeBeer = atom<boolean>({
  key: ATOM_KEY,
  default: false,
  effects: [persistRecoilEffect({ recoilAtomKey: ATOM_KEY })],
});

export default $isLikeBeer;
