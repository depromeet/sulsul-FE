import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import CreateRecordContainer from './CreateRecordContainer';

export default {
  title: 'Pages/기록 페이지',
  component: CreateRecordContainer,
} as ComponentMeta<typeof CreateRecordContainer>;

const Template: ComponentStory<typeof CreateRecordContainer> = (args) => (
  <CreateRecordContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beer: Beers[1],
};
