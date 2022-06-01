import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Record } from '@/constants/Record';

import BeerTicket from './BeerTicket';

export default {
  title: 'Components/BeerTicket',
  component: BeerTicket,
} as ComponentMeta<typeof BeerTicket>;

const Template: ComponentStory<typeof BeerTicket> = (args) => <BeerTicket {...args} />;

export const 티켓 = Template.bind({});
티켓.args = {
  record: Record as any,
};

export const 티켓이랑도장 = Template.bind({});
티켓이랑도장.args = {
  record: Record as any,
  type: 'stamp',
};

export const 티켓이랑도장2 = Template.bind({});
티켓이랑도장2.args = {
  record: { ...Record, feel: 5, recodedAt: new Date(2022, 1, 1) } as any,
  type: 'stamp',
};
