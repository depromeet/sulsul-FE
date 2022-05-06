import { ComponentStory, ComponentMeta } from '@storybook/react';

import MeBadge from './MeBadge';

export default {
  title: 'Commons/MeBadge',
  component: MeBadge,
  args: {},
} as ComponentMeta<typeof MeBadge>;

const Template: ComponentStory<typeof MeBadge> = ({ ...args }) => <MeBadge {...args} />;

export const Default = Template.bind({});
Default.args = {};
