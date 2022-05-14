import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@/components/commons/Icon';

import Button from './Button';

export default {
  title: 'Commons/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    line: { control: 'boolean' },
    count: { control: 'number' },
    leftAddon: { control: 'boolean' },
    rightAddon: { control: 'boolean' },
    htmlType: { control: 'select', options: ['button', 'submit'] },
  },
  args: {
    children: 'button',
    htmlType: 'button',
    disabled: false,
    icon: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ leftAddon, rightAddon, ...args }) => (
  <Button
    {...args}
    leftAddon={leftAddon ? <Icon name="FlightTakeOff" /> : undefined}
    rightAddon={rightAddon ? <Icon name="FlightTakeOff" /> : undefined}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};
