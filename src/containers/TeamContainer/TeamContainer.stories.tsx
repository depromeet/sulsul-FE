import { ComponentStory, ComponentMeta } from '@storybook/react';

import TeamContainer from './TeamContainer';

export default {
  title: 'Pages/TeamContainer',
  component: TeamContainer,
  args: {},
} as ComponentMeta<typeof TeamContainer>;

const Template: ComponentStory<typeof TeamContainer> = () => <TeamContainer />;

export const Default = Template.bind({});
Default.args = {};
