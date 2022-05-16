import { ComponentMeta, ComponentStory } from '@storybook/react';

import OnBoardingContainer from './OnBoardingContainer';

export default {
  title: 'Pages/시작하기',
  component: OnBoardingContainer,
} as ComponentMeta<typeof OnBoardingContainer>;

const Template: ComponentStory<typeof OnBoardingContainer> = () => <OnBoardingContainer />;

export const Default = Template.bind({});
Default.args = {};
