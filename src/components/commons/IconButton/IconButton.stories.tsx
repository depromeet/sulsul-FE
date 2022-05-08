import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './IconButton';

import { LikeIcon } from '@/assets/icon';

export default {
  title: 'Commons/IconButton',
  argTypes: {
    backgroundColor: { control: 'color', name: 'backgroundColor' },
    size: { control: 'text', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = ({ children, ...args }) => (
  <IconButton {...args}>{children}</IconButton>
);

export const Default = Template.bind({});
Default.args = {
  name: 'like',
  iconColor: 'blue',
  backgroundColor: 'white',
};
