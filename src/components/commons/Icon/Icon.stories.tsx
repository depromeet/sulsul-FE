import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

import { LikeIcon } from '@/assets/icon';

export default {
  title: 'Commons/Icon',
  argTypes: {
    color: { control: 'color', name: 'color' },
    size: { control: 'text', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ children, ...args }) => (
  <Icon {...args}>{children}</Icon>
);

export const Default = Template.bind({});
Default.args = {
  children: <LikeIcon />,
  color: 'white',
};
