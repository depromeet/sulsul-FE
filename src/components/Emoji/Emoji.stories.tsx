import { ComponentStory, ComponentMeta } from '@storybook/react';

import Emoji from './Emoji';

export default {
  title: 'Components/Emoji',
  component: Emoji,
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args) => <Emoji {...args} />;

export const Best = Template.bind({});
Best.args = {
  feel: 5,
};
export const Good = Template.bind({});
Good.args = {
  feel: 4,
};
export const Soso = Template.bind({});
Soso.args = {
  feel: 3,
};
export const Bad = Template.bind({});
Bad.args = {
  feel: 2,
};
export const Chaos = Template.bind({});
Chaos.args = {
  feel: 1,
};
export const None = Template.bind({});
Chaos.args = {
  feel: undefined,
};
