import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

export default {
  title: 'Commons/Icon-new',
  argTypes: {
    name: { control: 'text' },
    colorTheme: { control: 'text' },
    size: { control: 'number', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ ...args }) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Plus',
  colorTheme: 'blue',
  size: 30,
};
