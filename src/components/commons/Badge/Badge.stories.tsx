import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThumbUpIcon } from '@/assets/icon';

import Badge from './Badge';

export default {
  title: 'Commons/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    leftAddon: { control: 'boolean' },
    rightAddon: { control: 'boolean' },
  },
  args: { likeCount: 100 },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ leftAddon, rightAddon, ...args }) => (
  <Badge
    {...args}
    leftAddon={leftAddon ? <ThumbUpIcon /> : undefined}
    rightAddon={rightAddon ? <ThumbUpIcon /> : undefined}
  />
);

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  size: 'large',
  children: '999',
  leftAddon: true,
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'default',
  size: 'medium',
  children: '어쩔티비',
};

export const Small = Template.bind({});
Small.args = {
  type: 'primary',
  size: 'small',
  children: 'ME',
};
