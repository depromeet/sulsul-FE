import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileModifyModal from './ProfileModifyModal';

export default {
  title: 'Components/ProfileModifyModal',
  component: ProfileModifyModal,
  args: {},
} as ComponentMeta<typeof ProfileModifyModal>;

const Template: ComponentStory<typeof ProfileModifyModal> = ({ ...args }) => (
  <ProfileModifyModal {...args} />
);

export const Default = Template.bind({});
Default.args = {};
