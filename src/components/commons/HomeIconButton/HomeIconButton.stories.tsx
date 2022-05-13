import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeIconButton from './HomeIconButton';

export default {
  title: 'Commons/HomeIconButton',
  component: HomeIconButton,
  args: {},
} as ComponentMeta<typeof HomeIconButton>;

const Template: ComponentStory<typeof HomeIconButton> = () => <HomeIconButton />;

export const Default = Template.bind({});
Default.args = {};
