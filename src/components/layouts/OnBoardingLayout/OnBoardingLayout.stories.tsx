import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OnBoardingLayout from './OnBoardingLayout';

export default {
  title: 'Components/layouts/OnBoardingLayout',
  component: OnBoardingLayout,
  args: {
    title: '계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!',
  },
} as ComponentMeta<typeof OnBoardingLayout>;

const Template: ComponentStory<typeof OnBoardingLayout> = (args) => (
  <OnBoardingLayout {...args}>
    <>컨텐츠...</>
  </OnBoardingLayout>
);

export const 온보딩_레이아웃 = Template.bind({});
