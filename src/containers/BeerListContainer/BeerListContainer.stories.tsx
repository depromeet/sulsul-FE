import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerListContainer from './BeerListContainer';

export default {
  title: 'Pages/맥주 목록',
  component: BeerListContainer,
} as ComponentMeta<typeof BeerListContainer>;

const Template: ComponentStory<typeof BeerListContainer> = () => <BeerListContainer />;

export const Default = Template.bind({});
Default.args = {};
