import { ComponentMeta, ComponentStory } from '@storybook/react';

import BeerRecommendAndLikedContainer from './BeerRecommendAndLikedContainer';

export default {
  title: 'Pages/맥주 추천과 반한 맥주 목록',
  component: BeerRecommendAndLikedContainer,
  parameters: {
    nextRouter: {
      path: '/beer/recommend',
    },
  },
} as ComponentMeta<typeof BeerRecommendAndLikedContainer>;

const Template: ComponentStory<typeof BeerRecommendAndLikedContainer> = (args) => (
  <BeerRecommendAndLikedContainer {...args} />
);

export const 맥주_추천_목록 = Template.bind({});
맥주_추천_목록.args = {
  activatedIndex: 0,
};

export const 반한_맥주_목록 = Template.bind({});
반한_맥주_목록.args = {
  activatedIndex: 1,
};
