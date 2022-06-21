import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import UpsertRecordContainer from './UpsertRecordContainer';

export default {
  title: 'Pages/기록 페이지',
  component: UpsertRecordContainer,
} as ComponentMeta<typeof UpsertRecordContainer>;

const Template: ComponentStory<typeof UpsertRecordContainer> = (args) => (
  <UpsertRecordContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beer: Beers[1],
};
