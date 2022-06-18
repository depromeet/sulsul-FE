import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerRequestContainer from './BeerRequestContainer';

export default {
  title: 'Pages/맥주 요청',
  component: BeerRequestContainer,
  parameters: {
    nextRouter: {
      path: '/beer/request',
    },
  },
} as ComponentMeta<typeof BeerRequestContainer>;

const Template: ComponentStory<typeof BeerRequestContainer> = () => <BeerRequestContainer />;

export const 맥주_요청 = Template.bind({});
맥주_요청.args = {};
