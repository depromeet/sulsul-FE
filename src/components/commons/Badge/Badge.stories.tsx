import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThumbUpIcon } from '@/assets/icon';

import Badge from './Badge';

export default {
  title: 'Commons/Badge',
  component: Badge,
  argTypes: {
    lable: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
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

export const Default = Template.bind({});
Default.args = {
  lable: '과일 향이 나요',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  lable: '과일 향이 나요',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  lable: '과일 향이 나요',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  lable: '과일 향이 나요',
};
