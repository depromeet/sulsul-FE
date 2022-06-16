import { Beers } from '@/constants/Beers';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerListContainer from './BeerListContainer';

export default {
  title: 'Pages/맥주 목록',
  component: BeerListContainer,
} as ComponentMeta<typeof BeerListContainer>;

const Template: ComponentStory<typeof BeerListContainer> = () => (
  <BeerListContainer
    beersData={{
      success: true,
      resultCount: 10,
      hasNext: false,
      nextCursor: 10,
      contents: { ...Beers },
    }}
  />
);

export const Default = Template.bind({});
Default.args = {};
