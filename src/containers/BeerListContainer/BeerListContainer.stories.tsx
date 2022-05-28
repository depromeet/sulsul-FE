import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerListContainer from './BeerListContainer';

export default {
  title: 'Pages/맥주 목록',
  component: BeerListContainer,
  args: {
    query: '필스너',
  },
} as ComponentMeta<typeof BeerListContainer>;

const Template: ComponentStory<typeof BeerListContainer> = (args) => (
  <BeerListContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
