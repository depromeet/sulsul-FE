import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Beers } from '@/constants/Beers';

import RecordThirdStepContainer from './RecordThirdStepContainer';

export default {
  title: 'Pages/기록 페이지/RecordThirdStepContainer',
  component: RecordThirdStepContainer,
} as ComponentMeta<typeof RecordThirdStepContainer>;

const Template: ComponentStory<typeof RecordThirdStepContainer> = (args) => (
  <RecordThirdStepContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beer: Beers[1],
};
