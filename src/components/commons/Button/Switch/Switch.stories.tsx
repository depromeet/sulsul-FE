import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'Commons/Switch',
  component: Switch,
  argTypes: {
    defaultValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {};
