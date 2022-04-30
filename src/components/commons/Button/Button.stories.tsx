import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FlightTakeOffIcon } from '@/assets/icon';

import Button from './Button';

export default {
  title: 'Commons/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    icon: { control: 'boolean' },
    htmlType: { control: 'select', options: ['button', 'submit'] },
  },
  args: {
    children: 'button',
    htmlType: 'button',
    disabled: false,
    icon: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ icon, ...args }) => (
  <Button {...args} icon={icon ? <FlightTakeOffIcon /> : undefined} />
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
