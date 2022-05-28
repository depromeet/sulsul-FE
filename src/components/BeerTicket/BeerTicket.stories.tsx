import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import BeerTicket from './BeerTicket';

export default {
  title: 'Components/BeerTicket',
  component: BeerTicket,
} as ComponentMeta<typeof BeerTicket>;

const Template: ComponentStory<typeof BeerTicket> = (args) => <BeerTicket {...args} />;

const beer = Beers[1];
const record = {
  prevCountryNameEng: 'deuee',
  nextCountryNameEng: 'korea',
  prevCountryNameKor: '독일',
  nextCountryNameKor: '한국',
  feel: 3,
  flavors: [
    { id: 1, content: '목넘김이 부드러워요' },
    { id: 2, content: '목넘김이 부드러워요22' },
    { id: 3, content: '목넘김이 부드러워요33' },
  ],
  content: 'test',
  recodedAt: new Date(),
};

export const 티켓 = Template.bind({});
티켓.args = {
  beer: beer,
  record: record as any,
};

export const 티켓이랑도장 = Template.bind({});
티켓이랑도장.args = {
  beer: beer,
  record: record as any,
  type: 'stamp',
};

export const 티켓이랑도장2 = Template.bind({});
티켓이랑도장2.args = {
  beer: beer,
  record: { ...record, feel: 5, recodedAt: new Date(2022, 1, 1) } as any,
  type: 'stamp',
};
