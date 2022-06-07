import { ComponentStory, ComponentMeta } from '@storybook/react';

import LikeBadge from './LikeBadge';

export default {
  title: 'Commons/LikeBadge',
  component: LikeBadge,
  args: {},
} as ComponentMeta<typeof LikeBadge>;

const Template: ComponentStory<typeof LikeBadge> = ({ ...args }) => <LikeBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};
