import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewList from './ReviewList';

export default {
  title: 'Components/ReviewList',
  component: ReviewList,
  args: {},
} as ComponentMeta<typeof ReviewList>;

const Template: ComponentStory<typeof ReviewList> = ({ ...args }) => <ReviewList {...args} />;

export const Default = Template.bind({});
Default.args = {};
