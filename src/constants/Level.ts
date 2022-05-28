import { IconNameType } from '@/components/commons/Icon';

type Level = {
  level: IconNameType;
  count: number;
};

export const Level: Level[] = [
  { level: 'Level1', count: 0 },
  { level: 'Level2', count: 1 },
  { level: 'Level3', count: 5 },
  { level: 'Level4', count: 12 },
  { level: 'Level5', count: 20 },
];
