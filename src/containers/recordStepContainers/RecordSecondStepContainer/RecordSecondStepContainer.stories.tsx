import { ComponentMeta, ComponentStory } from '@storybook/react';

import RecordSecondStepContainer from './RecordSecondStepContainer';

export default {
  title: 'Pages/기록 페이지/RecordSecondStepContainer',
  component: RecordSecondStepContainer,
} as ComponentMeta<typeof RecordSecondStepContainer>;

const Template: ComponentStory<typeof RecordSecondStepContainer> = (args) => (
  <RecordSecondStepContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  beerName: '제주 페일 에일',
};
