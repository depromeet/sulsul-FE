import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Record } from '@/constants/Record';

import RecordListItem from './RecordListItem';
import backgroundImage from '../../../.storybook/assets/beer_background.png';

export default {
  title: 'Components/RecordListItem',
  component: RecordListItem,
  argTypes: {},
} as ComponentMeta<typeof RecordListItem>;

const Template: ComponentStory<typeof RecordListItem> = (args) => <RecordListItem {...args} />;

export const 기로옥 = Template.bind({});

기로옥.args = {
  record: {
    ...Record,
    imageUrl: backgroundImage as unknown as string,
  },
};
