import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Record } from '@/constants/Record';

import CompletedRecordContainer from './CompletedRecordContainer';

export default {
  title: 'Pages/기록 완료 페이지',
  component: CompletedRecordContainer,
} as ComponentMeta<typeof CompletedRecordContainer>;

const Template: ComponentStory<typeof CompletedRecordContainer> = (args) => (
  <CompletedRecordContainer {...args} />
);

export const 기록완료_페이지 = Template.bind({});
기록완료_페이지.args = {
  record: Record,
};
