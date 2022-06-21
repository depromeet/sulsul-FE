import { atom } from 'recoil';

import { IBeer } from '@/apis';

const ATOM_KEY = 'beer-session';

const $beerSession = atom<IBeer | undefined>({
  key: ATOM_KEY,
  default: undefined,
});

export default $beerSession;
