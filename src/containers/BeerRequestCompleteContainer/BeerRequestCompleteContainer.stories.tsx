import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerRequestCompleteContainer from './BeerRequestCompleteContainer';

export default {
  title: 'Pages/맥주 요청/맥주 요청 완료',
  component: BeerRequestCompleteContainer,
  parameters: {
    nextRouter: {
      path: '/beer/request/complete',
    },
  },
} as ComponentMeta<typeof BeerRequestCompleteContainer>;

const Template: ComponentStory<typeof BeerRequestCompleteContainer> = () => (
  <BeerRequestCompleteContainer />
);

export const 맥주_요청_완료 = Template.bind({});
맥주_요청_완료.args = {};
