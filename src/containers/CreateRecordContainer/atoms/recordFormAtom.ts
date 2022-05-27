import { atom } from 'recoil';

const ATOM_KEY = 'record-form';

interface RecordFormAtom {
  feel?: number;
  flavor?: number[];
  imageUrl?: string;
  isPublic?: boolean;
  content?: string;
}

const $recordForm = atom<RecordFormAtom>({
  key: ATOM_KEY,
  default: {},
});

export default $recordForm;
