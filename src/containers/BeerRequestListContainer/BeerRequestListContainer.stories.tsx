import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerRequestListContainer from './BeerRequestListContainer';

export default {
  title: 'Pages/맥주 요청 현황',
  component: BeerRequestListContainer,
  parameters: {
    nextRouter: {
      path: '/beer/requests',
    },
  },
} as ComponentMeta<typeof BeerRequestListContainer>;

const Template: ComponentStory<typeof BeerRequestListContainer> = () => (
  <BeerRequestListContainer />
);

export const 맥주_요청_현황 = Template.bind({});
맥주_요청_현황.args = {};
