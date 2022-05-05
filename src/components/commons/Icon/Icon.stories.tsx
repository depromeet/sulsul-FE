import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

import { LikeIcon } from '@/assets/icon';

export default {
  title: 'Commons/Icon',
  argTypes: {
    color: { control: 'text', name: 'color' },
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
