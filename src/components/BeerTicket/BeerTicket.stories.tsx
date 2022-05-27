import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import BeerTicket from './BeerTicket';

export default {
  title: 'Components/BeerTicket',
  component: BeerTicket,
} as ComponentMeta<typeof BeerTicket>;

const Template: ComponentStory<typeof BeerTicket> = (args) => <BeerTicket {...args} />;

export const 티켓 = Template.bind({});
티켓.args = {
  beer: Beers[1],
  record: {
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
  },
};
