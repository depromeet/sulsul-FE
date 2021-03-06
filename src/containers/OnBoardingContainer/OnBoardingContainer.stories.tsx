import { ComponentMeta, ComponentStory } from '@storybook/react';

import OnBoardingContainer from './OnBoardingContainer';

export default {
  title: 'Pages/μμνκΈ°',
  component: OnBoardingContainer,
} as ComponentMeta<typeof OnBoardingContainer>;

const Template: ComponentStory<typeof OnBoardingContainer> = () => <OnBoardingContainer />;

export const Default = Template.bind({});
Default.args = {};
